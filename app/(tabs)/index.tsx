import React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, ActivityIndicator, Button, View } from 'react-native';
import { Link } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff"/>;
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={{ fontFamily: 'Poppins_700Bold' }}>
          welcome!
        </ThemedText>
        <HelloWave/>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{ fontFamily: 'Poppins_700Bold' }}>
          I am Marie Louise M. Ty,
        </ThemedText>
        <ThemedText style={{ fontFamily: 'Poppins_400Regular' }}>
          a 3rd-year BSIT student. {"\n\n"}
          This is my first activity for the course IT 5103N - Advanced Mobile Software Development {"\n"}
          under Mr. Manuel Baricuatro Jr. in the University of San Carlos.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" style={{fontFamily: 'Poppins_700Bold'}}>
            Other Activities
        </ThemedText>
        <View style={styles.linklist}>
            <Link href="/(tabs)/ComponentShowcase" style={styles.linkText}>
                •   Activity 2: Components Showcase
            </Link>
            <Link href="/(tabs)/SpotifyUI" style={styles.linkText}>
                •   Activity 3: Spotify UI
            </Link>
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  linklist: {
    marginTop: 10,
    gap: 6,
  },
  linkText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins_700Bold',
  },

});
