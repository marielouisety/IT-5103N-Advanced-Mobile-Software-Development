import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function SpotifyLogin() {
    return (
        <View style={styles.container}>
        <Image
            source={require('../../assets/images/whitelogo.png')}
            style={styles.logo}
        />

        <Text style={styles.tagline}>
            Millions of songs. Free on Spotify.
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
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 40,
    tintColor: "#1DB954",
  },
  tagline: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },
  signupButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    marginBottom: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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