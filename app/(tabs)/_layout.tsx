import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Introduction',
          tabBarIcon: ({ color, size }) => (
              <FontAwesome name="book" size={size} color={color} />
              ),
        }}
      />
      <Tabs.Screen
        name="ComponentShowcase"
        options={{
          title: 'Components Showcase',
          tabBarIcon: ({ color, size }) => (
              <FontAwesome name="cubes" size={size} color={color} />
              ),
        }}
      />
      <Tabs.Screen
        name="SpotifyUI"
        options={{
          title: 'Spotify UI',
          tabBarIcon: ({ color, size }) => (
              <FontAwesome name="spotify" size={size} color={color} />
              ),
        }}
      />
    </Tabs>
  );
}
