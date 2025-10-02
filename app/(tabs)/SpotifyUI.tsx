import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

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
        <Image
            source={require('@/assets/images/whitelogo.png')}
            style={styles.logo}
        />

        <Text style={styles.tagline}>
            Millions of songs.{"\n"}
            Free on Spotify.
        </Text>

        <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupText}>Sign Up Free</Text>
        </TouchableOpacity>
        </View>
        );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
  signupButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 13,
    paddingHorizontal: 125,
    borderRadius: 25,
    marginTop: 90,
  },
  signupText: {
    color: "#121212",
    fontFamily: "CircularStdBold",
    fontSize: 16,
  },
  loginButton: {
    borderColor: "#fff",
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 25,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});