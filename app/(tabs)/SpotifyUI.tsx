import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function SpotifyUI() {
    return (
        <ScrollView style={styles.container}>
        {/* Header */}
        <Text style={styles.header}>Good Evening 🎵</Text>

        {/* Playlist Row */}
        <View style={styles.row}>
            <TouchableOpacity style={styles.playlistCard}>
                <Image
                    source={{ uri: "https://i.scdn.co/image/ab67616d0000b273e2e7b6d7aa5c31e7.jpg" }}
                    style={styles.playlistImage}
                />
                <Text style={styles.playlistText}>My Playlist</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={{ uri: "https://i.scdn.co/image/ab67616d00001e0278e57b7375.jpg" }}
                    style={styles.playlistImage}
                />
                <Text style={styles.playlistText}>Chill Vibes</Text>
            </TouchableOpacity>
        </View>

        {/* Recommended */}
        <Text style={styles.sectionTitle}>Recommended for You</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.recommendedCard}>
                    <Image
                        source={{ uri: "https://i.scdn.co/image/ab67616d0000b27317d6b72f6c2b9e1b.jpg" }}
                        style={styles.recommendedImage}
                    />
                    <Text style={styles.recommendedText}>Top Hits</Text>
                </View>
                <View style={styles.recommendedCard}>
                    <Image
                        source={{ uri: "https://i.scdn.co/image/ab67616d0000b273df4ff7a5d4f.jpg" }}
                        style={styles.recommendedImage}
                    />
                    <Text style={styles.recommendedText}>Lo-Fi Beats</Text>
                </View>
            </ScrollView>
        </ScrollView>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 20,
    },
    header: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        marginBotton: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    playlistCard: {
        flex: 1,
        marginRight: 10,
        backgroundColor: "#282828",
        borderRadius: 8,
        padding: 10,
        alignItems: "center",
    },
    playlistImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    playlistText: {
        color: "#fff",
        marginTop: 8,
    },
    sectionTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    recommendedCard: {
        marginRight: 15,
        alignItems: "center",
    },
    recommendedImage: {
        width: 120,
        height: 120,
        borderRadius: 8,
    },
    recommendedText: {
        color: "#fff",
        marginTop: 5,
    },
});
