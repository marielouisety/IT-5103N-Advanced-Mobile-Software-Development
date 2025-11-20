import React, { useEffect, useState, useReducer } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, TextInput } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const defaultPlaylists = [
    {
        id: "1",
        name: "mentally clubbing",
        cover: "https://picsum.photos/seed/club/200",
        owner: "Marie Louise",
    },
    {
        id: "2",
        name: "flirtatious",
        cover: "https://picsum.photos/seed/flirt/200",
        owner: "Marie Louise",
    },
    {
        id: "3",
        name: "let things be",
        cover: "https://picsum.photos/seed/letbe/200",
        owner: "Marie Louise",
    },
    {
        id: "4",
        name: "girlboss mentality",
        cover: "https://picsum.photos/seed/girlboss/200",
        owner: "Marie Louise",
    },
];

const initialState = {
    playlists: [],
};

function playlistReducer(state, action) {
    switch (action.type) {
        case "ADD_PLAYLIST": {
            const newPlaylist = {
                id: Date.now().toString(),
                name: action.payload,
                owner: "You",
                cover: `https://picsum.photos/seed/${Math.random()}/200`,
            };
            return { playlists: [...state.playlists, newPlaylist] };
        }

        case "DELETE_PLAYLIST":
            return {
                playlists: state.playlists.filter((p) => p.id !== action.payload),
        };

        case "LOAD_DATA":
            return { playlists: Array.isArray(action.payload.playlists)
                ? action.payload.playlists
                : []
        };

        default:
            return state;
    }
}

export default function MyLibrary() {
    const [fontsLoaded] = useFonts({
        CircularStdMedium: require("@/assets/fonts/circular-std-medium-500.ttf"),
        CircularStdBold: require("@/assets/fonts/circular-std-4.ttf"),
    });

    if (!fontsLoaded) return null;

    const router = useRouter();
    const [state, dispatch] = useReducer(playlistReducer, initialState);
    const [playlistName, setPlaylistName] = useState("");

    // Load saved playlists
    useEffect(() => {
        const load = async () => {
            const saved = await AsyncStorage.getItem("playlist_list");

            if (saved) {
                dispatch({ type: "LOAD_DATA", payload: JSON.parse(saved) });
            } else {
                dispatch({ type: "LOAD_DATA", payload: { playlists: defaultPlaylists } });
            }
        };
        load();
    }, []);

    // Save playlists automatically
    useEffect(() => {
        AsyncStorage.setItem("playlist_list", JSON.stringify({ playlists: state.playlists }));
    }, [state]);

    const addPlaylist = () => {
        if (playlistName.trim() === "") return;
        dispatch({ type: "ADD_PLAYLIST", payload: playlistName });
        setPlaylistName("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Library</Text>

            {/* Add playlist input */}
            <View style={styles.addRow}>
                <TextInput
                    style={styles.input}
                    placeholder="New playlist..."
                    placeholderTextColor="#888"
                    value={playlistName}
                    onChangeText={setPlaylistName}
                />

                <TouchableOpacity style={styles.addBtn} onPress={addPlaylist}>
                    <Text style={styles.addBtnText}>Add</Text>
                </TouchableOpacity>
            </View>

            {/* Playlist List */}
            <FlatList
                data={state.playlists}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingTop: 10, paddingBottom: 50 }}
                renderItem={({ item }) => (
                    <Animated.View
                        style={styles.row}
                        entering={FadeInDown}
                        exiting={FadeOutUp}
                    >
                        <TouchableOpacity
                            style={styles.rowLeft}
                            onPress={() => router.push(`/playlist/${item.id}`)}
                        >
                            <Image source={{ uri: item.cover }} style={styles.cover} />

                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.subtitle}>
                                    Playlist · {item.owner}
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() =>
                                dispatch({ type: "DELETE_PLAYLIST", payload: item.id })
                            }
                        >
                            <Ionicons name="trash-outline" size={24} color="#F55" />
                        </TouchableOpacity>
                    </Animated.View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: "white",
        fontFamily: "CircularStdBold",
        marginBottom: 20,
    },
    addRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 15,
    },
    input: {
        flex: 1,
        backgroundColor: "#1a1a1a",
        padding: 12,
        borderRadius: 10,
        color: "white",
        fontFamily: "CircularStdMedium",
    },
    addBtn: {
        backgroundColor: "#1DB954",
        paddingHorizontal: 18,
        borderRadius: 10,
        justifyContent: "center",
    },
    addBtnText: {
        color: "white",
        fontFamily: "CircularStdBold",
        fontSize: 16,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
    },
    rowLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    cover: {
        width: 60,
        height: 60,
        borderRadius: 4,
    },
    name: {
        color: "white",
        fontSize: 17,
        fontFamily: "CircularStdBold",
    },
    subtitle: {
        color: "#b3b3b3",
        fontSize: 13,
        marginTop: 3,
        fontFamily: "CircularStdMedium",
    },
});
