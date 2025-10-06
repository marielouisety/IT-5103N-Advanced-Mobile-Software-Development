import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { router } from "expo-router";

export default function SpotifyLogin() {
    const [fontsLoaded] = useFonts({
        CircularStdMedium: require("@/assets/fonts/circular-std-medium-500.ttf"),
        CircularStdBold: require("@/assets/fonts/circular-std-4.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoIntro}>
            <Image
                source={require('@/assets/images/whitelogo.png')}
                style={styles.logo}
            />

            <Text style={styles.tagline}>
                Millions of songs.{"\n"}
                Free on Spotify.
            </Text>
            </View>

            <View style={styles.signLog}>
                <TouchableOpacity style={styles.signupButton}
                onPress={() => router.push("/Sign Up")}>
                    <Text style={styles.signupText}>Sign Up Free</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logInButton}>
                    <Text style={styles.logInText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  logoIntro: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  tagline: {
    fontFamily: "CircularStdBold",
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
  },
  signLog: {
      alignItems: "center",
      marginBottom: 40,
  },
  signupButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 13,
    paddingHorizontal: 125,
    borderRadius: 25,
    marginBottom: 10,
  },
  signupText: {
    color: "#121212",
    fontFamily: "CircularStdBold",
    fontSize: 16,
  },
  logInButton: {
    borderColor: "#535353",
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 150,
    borderRadius: 25,
    marginBottom: 40,
  },
  logInText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "CircularStdBold",
  },
});