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
          source={require("@/assets/images/whitelogo.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>
          Millions of songs.{"\n"}Free on Spotify.
        </Text>
      </View>

      <View style={styles.signLog}>
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>Sign Up Free</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoIntro: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
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
    marginBottom: 40,
  },
  signupText: {
    color: "#121212",
    fontFamily: "CircularStdBold",
    fontSize: 16,
  },
});