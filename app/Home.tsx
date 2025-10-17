import React, { useState, useReducer, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

function playlistReducer(state, action) {
    switch (action.type) {
    case "ADD_SONG":
        if (!action.payload.trim()) return state;
        return {
            ...state,
            songs: [...state.songs, action.payload],
            history: [...state.history, { action: "ADD", song: action.payload }],
        };
    case "REMOVE_SONG":
        return {
            ...state,
            songs: state.songs.filter((_, i) => i !== action.payload),
            history: [...state.history, { action: "REMOVE", song: state.songs[action.payload] }],
        };
    case "CLEAR_PLAYLIST":
        return { ...state, songs: [], history: [...state.history, { action: "CLEAR" }] };
    case "SET_STATE":
        return action.payload;
    default:
        return state;
  }
}

export default function Home() {
    const [song, setSong] = useState("");
    const [state, dispatch] = useReducer(playlistReducer, { songs: [], history: [] });

    const [fontsLoaded] = useFonts({
        CircularStdMedium: require("@/assets/fonts/circular-std-medium-500.ttf"),
        CircularStdBold: require("@/assets/fonts/circular-std-4.ttf"),
    });

    useEffect(() => {
        (async () => {
            const saved = await AsyncStorage.getItem("playlist");
                if (saved) {
                    dispatch({ type: "SET_STATE", payload: JSON.parse(saved) });
                }
        })();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem("playlist", JSON.stringify(state));
    }, [state]);

    if (!fontsLoaded) return null;

    const addSong = () => {
        dispatch({ type: "ADD_SONG", payload: song });
        setSong("");
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <Text style={styles.title}>🎶 My Spotify Playlist</Text>

        <View style={styles.inputRow}>
            <TextInput
                placeholder="Enter a song name"
                placeholderTextColor="#aaa"
                style={styles.input}
                value={song}
                onChangeText={setSong}
            />
            <TouchableOpacity style={styles.addButton} onPress={addSong}>
                <Text style={styles.addText}>Add</Text>
            </TouchableOpacity>
        </View>

        <FlatList
            data={state.songs}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
            <Animated.View
                entering={FadeInDown}
                exiting={FadeOutUp}
                style={styles.songCard}
            >
                <Text style={styles.songText}>{item}</Text>
                <TouchableOpacity
                    onPress={() => dispatch({ type: "REMOVE_SONG", payload: index })}
                >
                <Text style={styles.removeText}>✕</Text>
                </TouchableOpacity>
            </Animated.View>
            )}
        />

        <TouchableOpacity
            style={styles.clearButton}
            onPress={() => dispatch({ type: "CLEAR_PLAYLIST" })}
        >
            <Text style={styles.clearText}>Clear Playlist</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontFamily: "CircularStdBold",
        color: "#1DB954",
    textAlign: "center",
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: "#2a2a2a",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
    fontFamily: "CircularStdMedium",
  },
  addButton: {
    backgroundColor: "#1DB954",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addText: {
    color: "#121212",
    fontFamily: "CircularStdBold",
    fontSize: 16,
  },
  songCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#2a2a2a",
    borderRadius: 10,
    padding: 12,
    marginVertical: 5,
  },
  songText: {
    color: "#fff",
    fontFamily: "CircularStdMedium",
    fontSize: 16,
  },
  removeText: {
    color: "#FF6B6B",
    fontSize: 18,
  },
  clearButton: {
    marginTop: 15,
    backgroundColor: "#FF6B6B",
    paddingVertical: 12,
    borderRadius: 25,
  },
  clearText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "CircularStdBold",
    fontSize: 16,
  },
});