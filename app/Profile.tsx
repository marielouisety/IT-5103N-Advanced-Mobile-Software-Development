import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, { FadeIn } from "react-native-reanimated";
import { useFonts } from "expo-font";
import { router } from "expo-router";

export default function Profile() {
    const [fontsLoaded] = useFonts({
        CircularStdMedium: require("@/assets/fonts/circular-std-medium-500.ttf"),
        CircularStdBold: require("@/assets/fonts/circular-std-4.ttf"),
    });

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const loadProfile = async () => {
            const data = await AsyncStorage.getItem("signup_form");
            if (data) setProfile(JSON.parse(data));
        };
        loadProfile();
    }, []);

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Profile</Text>

            {!profile ? (
                <Text style={styles.emptyText}>No profile data found.</Text>
            ) : (
                <Animated.View entering={FadeIn} style={styles.card}>

                    {/* Profile Picture */}
                    <Image
                        source={require("@/assets/images/profilePic.avif")}
                        style={styles.avatar}
                    />

                    <View style={{ marginTop: 20 }}>

                        {/* Username */}
                        <Text style={styles.label}>Username</Text>
                        <Text style={styles.value}>{profile.name}</Text>

                        {/* Email */}
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.value}>{profile.email}</Text>

                        {/* Genre */}
                        <Text style={styles.label}>Favorite Genre</Text>
                        <Text style={styles.value}>{profile.genre}</Text>

                        {/* Date of Birth */}
                        <Text style={styles.label}>Date of Birth</Text>
                        <Text style={styles.value}>
                            {profile.day}/{profile.month}/{profile.year}
                        </Text>

                        {/* Gender */}
                        <Text style={styles.label}>Gender</Text>
                        <Text style={styles.value}>{profile.gender}</Text>
                    </View>

                    {/* Edit Profile Button */}
                    <TouchableOpacity
                        style={styles.editBtn}
                        onPress={() => router.push("/EditProfile")}
                    >
                        <Text style={styles.editText}>Edit Profile</Text>
                    </TouchableOpacity>

                </Animated.View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#ffffff",
    },
    title: {
        fontFamily: "CircularStdBold",
        fontSize: 28,
        marginBottom: 15,
    },
    emptyText: {
        fontSize: 16,
        color: "gray",
    },
    card: {
        backgroundColor: "#f5f5f5",
        padding: 22,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
        alignItems: "center",
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: "#ccc",
    },
    label: {
        fontFamily: "CircularStdMedium",
        fontSize: 14,
        color: "gray",
        marginTop: 12,
    },
    value: {
        fontFamily: "CircularStdBold",
        fontSize: 18,
        color: "#000",
        marginBottom: 5,
    },
    editBtn: {
        marginTop: 30,
        width: "100%",
        backgroundColor: "#1DB954",
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
    },
    editText: {
        color: "#fff",
        fontSize: 17,
        fontFamily: "CircularStdBold",
    },
});
