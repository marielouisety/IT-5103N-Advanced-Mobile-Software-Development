import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function SignUpWithEmail() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        CircularStdMedium: require("@/assets/fonts/circular-std-medium-500.ttf"),
        CircularStdBold: require("@/assets/fonts/circular-std-4.ttf"),
    });

    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
        day: "",
        month: "",
        year: "",
        gender: "",
    });

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require("@/assets/images/whitelogo.png")}
                    style={styles.logo}
                />
                <Text style={styles.title}>Spotify</Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#b3b3b3"
                    style={styles.input}
                    value={form.email}
                    onChangeText={(email) => setForm({ ...form, email })}
                />
                <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="#b3b3b3"
                    style={styles.input}
                    value={form.name}
                    onChangeText={(name) => setForm({ ...form, name })}
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#b3b3b3"
                    style={styles.input}
                    secureTextEntry
                    value={form.password}
                    onChangeText={(password) => setForm({ ...form, password })}
                />

                <Text style={styles.label}>Date of Birth:</Text>
                <View style={styles.dobRow}>
                    <TextInput
                        placeholder="DD"
                        placeholderTextColor="#b3b3b3"
                        style={[styles.input, styles.dobInput]}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={(day) => setForm({ ...form, day})}
                    />
                    <TextInput
                        placeholder="MM"
                        placeholderTextColor="#b3b3b3"
                        style={[styles.input, styles.dobInput]}
                        keyboardType="numeric"
                        maxLength={2}
                        onChangeText={(month) => setForm({ ...form, month })}
                    />
                    <TextInput
                        placeholder="YYYY"
                        placeholderTextColor="#b3b3b3"
                        style={[styles.input, styles.dobInput]}
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={(year) => setForm({ ...form, year })}
                    />
                </View>

                <View style={styles.genderRow}>
                    <TouchableOpacity
                        style={[
                            styles.genderOption,
                            form.gender === "Male" && styles.genderSelected
                        ]}
                        onPress={() => setForm({ ...form, gender: "Male" })}
                    >
                        <Text style={styles.genderText}>Male</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.genderOption,
                            form.gender === "Female" && styles.genderSelected,
                        ]}
                        onPress={() => setForm({ ...form, gender: "Female" })}
                    >
                        <Text style={styles.genderText}>Female</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>

                <Text style={styles.footerText}>
                    Already have an account? {" "}
                    <Text
                        style={styles.logInLink}
                    >
                        Log In
                    </Text>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 25,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 30,
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
    title: {
        fontFamily: "CircularStdBold",
        color: "#fff",
        fontSize: 28,
    },
    form: {
        flex: 1,
    },
    input: {
        backgroundColor: "#2a2a2a",
        color: "#fff",
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        fontFamily: "CircularStdMedium",
    },
    label: {
        color: "#1DB954",
        fontFamily: "CircularStdBold",
        marginBottom: 5,
    },
    dobRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    dobInput: {
        width: "30%",
        textAlign: "center",
    },
    genderRow: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 25,
    },
    genderOption: {
        borderWidth: 1,
        borderColor: "#535353",
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginHorizontal: 20,
    },
    genderSelected: {
        borderColor: "#1DB954",
        backgroundColor: "#1DB95433",
    },
    genderText: {
        color: "#fff",
        fontFamily: "CircularStdMedium",
    },
    signUpButton: {
        backgroundColor: "#1DB954",
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: "center",
        marginBottom: 20,
    },
    signUpText: {
        color: "#121212",
        fontFamily: "CircularStdBold",
        fontSize: 16,
    },
    footerText: {
        color: "#b3b3b3",
        textAlign: "center",
    },
    logInLink: {
        color: "#1DB954",
        fontFamily: "CircularStdBold",
    },
});