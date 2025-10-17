import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

export default function SpotifyLogin() {
  const router = useRouter();

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
          Sign up to start listening
        </Text>
      </View>

      <View style={styles.allOptions}>
        <TouchableOpacity style={styles.email}
          onPress={() => router.push("/Email")}>
          <Text
            style={styles.emailText}
          >
            Continue with email
          </Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}> Continue with Apple </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.optionText}>
            Already have an account?
      </Text>

      <View style={styles.logIn}>
        <Text style={styles.textBold}>
            Log in
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
  },
  logoIntro: {
    alignItems: "center",
    flex: 1,
    marginTop: 335,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  tagline: {
    fontFamily: "CircularStdBold",
    color: "#fff",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 40,
  },
  allOptions: {
    alignItems: "center",
    marginBottom: 27,
  },
  email: {
    backgroundColor: "#1DB954",
    paddingVertical: 13,
    paddingHorizontal: 100,
    borderRadius: 25,
    marginBottom: 10,
  },
  emailText: {
    color: "#121212",
    fontFamily: "CircularStdBold",
    fontSize: 16,
  },
  optionText: {
    color: "#fff",
    fontFamily: "CircularStdMedium",
    fontSize: 16,
  },
  option: {
    borderColor: "#535353",
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 95,
    borderRadius: 25,
    marginBottom: 10,
  },
  logIn: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 25,
  },
  textBold: {
    color: "#fff",
    fontFamily: "CircularStdBold",
    fontSize: 16,
    marginTop: 10,
  },
  });