import React, { useEffect, useReducer, useState, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";

/**
 * State shape:
 * {
 *   past: Array<Array<string>>,
 *   present: Array<string>,  // current playlist (array of song names)
 *   future: Array<Array<string>>
 * }
 *
 * Actions: ADD, REMOVE, CLEAR, UNDO, REDO, SET_STATE
 */

type State = {
  past: string[][];
  present: string[];
  future: string[][];
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "REMOVE"; payload: number } // index
  | { type: "CLEAR" }
  | { type: "UNDO" }
  | { type: "REDO" }
  | { type: "SET_STATE"; payload: State };

const initialState: State = { past: [], present: [], future: [] };

function playlistReducer(state: State, action: Action): State {
  const { past, present, future } = state;

  switch (action.type) {
    case "ADD": {
      const name = action.payload.trim();
      if (!name) return state;
      const next = [...present, name];
      return { past: [...past, present], present: next, future: [] };
    }

    case "REMOVE": {
      const idx = action.payload;
      if (idx < 0 || idx >= present.length) return state;
      const next = present.filter((_, i) => i !== idx);
      return { past: [...past, present], present: next, future: [] };
    }

    case "CLEAR": {
      if (present.length === 0) return state;
      return { past: [...past, present], present: [], future: [] };
    }

    case "UNDO": {
      if (past.length === 0) return state;
      const previous = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return { past: newPast, present: previous, future: [present, ...future] };
    }

    case "REDO": {
      if (future.length === 0) return state;
      const next = future[0];
      const newFuture = future.slice(1);
      return { past: [...past, present], present: next, future: newFuture };
    }

    case "SET_STATE": {
      return action.payload;
    }

    default:
      return state;
  }
}

/* Small memoized row for songs */
const SongRow = React.memo(function SongRow({
  title,
  index,
  onRemove,
}: {
  title: string;
  index: number;
  onRemove: (i: number) => void;
}) {
  return (
    <Animated.View entering={FadeInDown} exiting={FadeOutUp} style={styles.songCard}>
      <Text numberOfLines={1} style={styles.songText}>
        {title}
      </Text>
      <TouchableOpacity onPress={() => onRemove(index)}>
        <Text style={styles.removeText}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  );
});

export default function Home() {
  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(playlistReducer, initialState);
  const STORAGE_KEY = "@playlist_state_v1";

  // load
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed: State = JSON.parse(raw);
          // basic validation
          if (parsed && parsed.present) {
            dispatch({ type: "SET_STATE", payload: parsed });
          }
        }
      } catch (e) {
        console.warn("Failed to load playlist:", e);
      }
    })();
  }, []);

  // save on change
  useEffect(() => {
    (async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        console.warn("Failed to save playlist:", e);
      }
    })();
  }, [state]);

  const addSong = useCallback(() => {
    if (!text.trim()) return;
    dispatch({ type: "ADD", payload: text });
    setText("");
  }, [text]);

  const removeSong = useCallback((index: number) => {
    dispatch({ type: "REMOVE", payload: index });
  }, []);

  const clearPlaylist = useCallback(() => {
    if (state.present.length === 0) return;
    Alert.alert("Clear playlist", "Are you sure you want to clear the playlist?", [
      { text: "Cancel", style: "cancel" },
      { text: "Clear", style: "destructive", onPress: () => dispatch({ type: "CLEAR" }) },
    ]);
  }, [state.present.length]);

  const undo = () => dispatch({ type: "UNDO" });
  const redo = () => dispatch({ type: "REDO" });

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <SongRow title={item} index={index} onRemove={removeSong} />
  );

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Text style={styles.title}>Your Playlist</Text>

      <View style={styles.inputRow}>
        <TextInput
          placeholder="Add song name..."
          placeholderTextColor="#aaa"
          style={styles.input}
          value={text}
          onChangeText={setText}
          onSubmitEditing={addSong}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.addButton} onPress={addSong}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity style={[styles.ctrlBtn, state.past.length === 0 && styles.disabled]} onPress={undo} disabled={state.past.length === 0}>
          <Text style={styles.ctrlText}>Undo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.ctrlBtn, state.future.length === 0 && styles.disabled]} onPress={redo} disabled={state.future.length === 0}>
          <Text style={styles.ctrlText}>Redo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.clearBtn, state.present.length === 0 && styles.disabled]} onPress={clearPlaylist} disabled={state.present.length === 0}>
          <Text style={styles.clearText}>Clear</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={state.present}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.empty}>Your playlist is empty — add songs above.</Text>}
      />

      <View style={styles.historyArea}>
        <Text style={styles.historyTitle}>History (recent actions)</Text>
        <Text style={styles.historyText}>Past states: {state.past.length}</Text>
        <Text style={styles.historyText}>Future states: {state.future.length}</Text>
      </View>
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
    fontSize: 24,
    color: "#1DB954",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: 14,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  input: {
    flex: 1,
    backgroundColor: "#222",
    color: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: "#1DB954",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  addText: {
    color: "#081010",
    fontWeight: "700",
  },
  controlsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  ctrlBtn: {
    backgroundColor: "#2a2a2a",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  ctrlText: {
    color: "#fff",
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.4,
  },
  clearBtn: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  clearText: {
    color: "#fff",
    fontWeight: "700",
  },
  list: {
    paddingBottom: 12,
  },
  songCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1f1f1f",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    justifyContent: "space-between",
  },
  songText: {
    color: "#fff",
    flex: 1,
    marginRight: 8,
  },
  removeText: {
    color: "#FF6B6B",
    fontSize: 18,
  },
  empty: {
    color: "#c5c5c5",
    textAlign: "center",
    marginTop: 40,
  },
  historyArea: {
    marginTop: 12,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#222",
  },
  historyTitle: {
    color: "#cfcfcf",
    fontWeight: "700",
    marginBottom: 6,
  },
  historyText: {
    color: "#cfcfcf",
    fontSize: 12,
  },
});
