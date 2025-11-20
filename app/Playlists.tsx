import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Playlists({ navigation }) {
    const [playlists, setPlaylists] = useState<string[]>([]);
    const [newName, setNewName] = useState("");

    const STORAGE_KEY = "all_playlists";

    useEffect(() => {
        (async () => {
            const raw = await AsyncStorage.getItem(STORAGE_KEY);
            if (raw) setPlaylists(JSON.parse(raw));
            })();
    }, []);

    // Save playlist names
    const savePlaylists = async (list: string[]) => {
        setPlaylists(list);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    };

    const addPlaylist = () => {
        const name = newName.trim();
        if (name.length === 0) return;

        const updated = [...playlists, name];
        savePlaylists(updated);
        setNewName("");
    };

    const openPlaylist = (name: string) => {
        navigation.navigate("AddPlaylist", { playlistName: name });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Playlists</Text>

            <View style={styles.rpw}>
                <TextInput
                    placeholder="New playlist name..."
                    placeholderTextColor="#bbb"
                    style={styles.input}
                    value={newName}
                    onChangeText={setNewName}
                />
                <TouchableOpacity style={styles.addButton} onPress={addPlaylist}>
                    <Text style={styles.addText}>Create</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={playlists}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => openPlaylist(item)}>
                        <Text stle={styles.cardText}>{item}</Text>
                    </TouchableOpacity>
                    )}
                    ListEmptyComponent={
                        <Text style={{ color: "#aaa", marginTop: 40 }}>
                            No playlists yet — create one above.
                        </Text>
                    }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 20,
    },
    title: {
        color: "#1DB954",
        fontSize: 26,
        fontWeight: "700",
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
        marginBottom: 16,
    },
    input: {
        flex: 1,
        backgroundColor: "#222",
        color: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 14,
        borderRadius: 8,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: "#1DB954",
        paddingHorizontal: 16,
        justifyContent: "center",
        borderRadius: 8,
    },
    addText: {
        fontWeight: "700",
        color: "#000"
    },
    card: {
        backgroundColor: "#1e1e1e",
        padding: 16,
        borderRadius: 10,
        marginBottom: 10,
    },
    cardText: {
        color: "#fff",
        fontSize: 16,
    },
});