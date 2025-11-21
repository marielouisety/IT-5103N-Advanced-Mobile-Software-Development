import React, { useEffect, useState, useCallback } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Platform, KeyboardAvoidingView, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, { FadeIn } from "react-native-reanimated";

const STORAGE_KEY = "profile_form_cache";

type ProfileData = {
    username: string;
    email: string;
    genre: string;
};

const GENRES = ["Pop", "Rock", "Jazz", "Classical", "Hip-Hop"];

function validateUsername(u: string) {
    if (!u) return "Username is required.";
    if (u.length < 3 || u.length > 20) return "Username must be 3–20 characters.";
    if (!/^[A-Za-z0-9_]+$/.test(u)) return "Only letters, numbers and underscores allowed.";
    return "";
}

function validateEmail(e: string) {
    if (!e) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return "Invalid email address.";
    return "";
}

function validateGenre(g: string) {
    if (!g) return "Please select a genre.";
    if (!GENRES.includes(g)) return "Invalid genre.";
    return "";
}

const ProfilePreview = React.memo(function ProfilePreview({
    username,
    email,
    genre,
}: ProfileData) {

const hasAny = Boolean(username || email || genre);
const imgUrl = genre
    ? `https://via.placeholder.com/100?text=${encodeURIComponent(genre)}`
    : "https://via.placeholder.com/100?text=Profile";

return (
    <Animated.View
        entering={hasAny ? FadeIn.duration(300) : undefined}
        style={styles.previewCard}
    >
        <View style={styles.previewLeft}>
        <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>{/* image replaced by background */}</Text>
        </View>
        </View>

        <View style={styles.previewRight}>
            <Text style={styles.previewLabel}>Preview</Text>
            <Text style={styles.previewName}>{username || "Your username"}</Text>
            <Text style={styles.previewEmail}>{email || "your.email@example.com"}</Text>
            <Text style={styles.previewGenre}>{genre || "No genre selected"}</Text>
        </View>
    </Animated.View>
    );
}, (prev, next) => {
    return prev.username === next.username && prev.email === next.email && prev.genre === next.genre;
});

export default function ProfileForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [genre, setGenre] = useState("");

    const [userError, setUserError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [genreError, setGenreError] = useState("");

    // load cache on mount
    useEffect(() => {
        (async () => {
            try {
                const raw = await AsyncStorage.getItem(STORAGE_KEY);
                if (raw) {
                    const parsed: Partial<ProfileData> = JSON.parse(raw);
                if (parsed.username) setUsername(parsed.username);
                if (parsed.email) setEmail(parsed.email);
                if (parsed.genre) setGenre(parsed.genre);
                }
            } catch (e) {
            }
        })();
    }, []);

    // save to cache when any field changes
    useEffect(() => {
        const save = async () => {
            try {
                const payload = { username, email, genre };
                await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
            } catch (e) {
            }
        };
        save();
    }, [username, email, genre]);

    // realtime validation on change
    useEffect(() => {
        setUserError(validateUsername(username));
    }, [username]);
    useEffect(() => {
        setEmailError(validateEmail(email));
    }, [email]);
    useEffect(() => {
        setGenreError(validateGenre(genre));
    }, [genre]);

    const handleSubmit = useCallback(async () => {
        const uErr = validateUsername(username);
        const eErr = validateEmail(email);
        const gErr = validateGenre(genre);

        setUserError(uErr);
        setEmailError(eErr);
        setGenreError(gErr);

        if (uErr || eErr || gErr) {
            Alert.alert("Validation failed", "Please fix the errors before submitting.");
            return;
        }

        try {
            await AsyncStorage.removeItem(STORAGE_KEY);
            setUsername("");
            setEmail("");
            setGenre("");
            Alert.alert("Success", "Profile saved (cache cleared).");
        } catch (err) {
            Alert.alert("Error", "Unable to complete submission.");
        }
    }, [username, email, genre]);

    return (
        <KeyboardAvoidingView
            behavior={Platform.select({ ios: "padding", android: undefined })}
            style={{ flex: 1 }}
        >
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Create your profile</Text>
            <Text style={styles.label}>Username</Text>
            <TextInput
                style={[styles.input, userError ? styles.inputError : null]}
                placeholder="Enter username"
                placeholderTextColor="#999"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            {!!userError && <Text style={styles.error}>{userError}</Text>}

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={[styles.input, emailError ? styles.inputError : null]}
                placeholder="you@example.com"
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            {!!emailError && <Text style={styles.error}>{emailError}</Text>}

            <Text style={styles.label}>Favorite genre</Text>
            <View style={styles.genreRow}>
                {GENRES.map((g) => {
                const selected = g === genre;
                return (
                    <TouchableOpacity
                        key={g}
                        style={[styles.genreItem, selected && styles.genreSelected]}
                        onPress={() => setGenre(selected ? "" : g)}
                    >
                    <Text style={[styles.genreText, selected && styles.genreTextSelected]}>{g}</Text>
                    </TouchableOpacity>
                );
                })}
            </View>
                {!!genreError && <Text style={styles.error}>{genreError}</Text>}

                <ProfilePreview username={username} email={email} genre={genre} />

                <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
                    <Text style={styles.submitText}>Submit (clear cache & reset)</Text>
                </TouchableOpacity>
        </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 60,
        backgroundColor: "#121212",
    },
    header: {
        color: "#fff",
        fontSize: 22,
        marginBottom: 18,
        fontWeight: "700",
    },
    label: {
        color: "#ddd",
        marginBottom: 6,
        marginTop: 8,
    },
    input: {
        backgroundColor: "#1f1f1f",
        color: "#fff",
        padding: 12,
        borderRadius: 10,
    },
    inputError: {
        borderWidth: 1,
        borderColor: "#ff6b6b",
    },
    error: {
        color: "#ff6b6b",
        marginTop: 6,
        marginBottom: 6,
    },
    genreRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        marginBottom: 8,
    },
    genreItem: {
        borderWidth: 1,
        borderColor: "#333",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        marginRight: 8,
        marginBottom: 8,
    },
    genreSelected: {
        backgroundColor: "#1DB95433",
        borderColor: "#1DB954",
    },
    genreText: {
        color: "#ddd",
    },
    genreTextSelected: {
        color: "#1DB954",
        fontWeight: "700",
    },
    previewCard: {
        marginTop: 18,
        backgroundColor: "#171717",
        padding: 14,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
    },
    previewLeft: {
        marginRight: 12,
    },
    avatarPlaceholder: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#2a2a2a",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        color: "#888",
    },
    previewRight: {
        flex: 1,
    },
    previewLabel: {
        color: "#999",
        fontSize: 12,
    },
    previewName: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        marginTop: 4,
    },
    previewEmail: {
        color: "#bbb",
        marginTop: 4,
    },
    previewGenre: {
        color: "#9ae6b4",
        marginTop: 6,
        fontWeight: "600",
    },
    submitBtn: {
        marginTop: 20,
        backgroundColor: "#1DB954",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    submitText: {
        color: "#000",
        fontWeight: "700",
    },
});
