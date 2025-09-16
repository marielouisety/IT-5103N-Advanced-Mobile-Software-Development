import React, { useState, useEffect } from 'react';
import { ScrollView, Text, Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

export default function ComponentShowcase() {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev-1);
            }, 1000);
        } else if (timeLeft === 0 && isActive) {
            setIsActive(false);
            alert(
                `\n⏰ Time's up!\nTotal Clicks: ${countA + countB}\n\nYou are the pinakabayot of them all!`)
        }
        return () => clearInterval(timer);
    }, [isActive, timeLeft]);

    const resetGame = () => {
        setCountA(0);
        setCountB(0);
        setTimeLeft(15);
        setIsActive(true);
    };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pinakabayot Test</Text>

      <Image
        source={require('../../assets/images/welcome-pic.png')}
        style={styles.image}
      />

      <Text style={styles.text}>Place two fingers on the buttons.</Text>
      <Text style={styles.text}>You have 15 seconds to click as much as you can!</Text>

      {/* Timer */}
      <Text style={styles.timer}>⏳ Time Left: {timeLeft}s</Text>

      <View style={styles.buttonRow}>
        {/* Button A */}
        <TouchableOpacity
            style={styles.customButton}
            onPress={() => setCountA(countA + 1)}
        >
            <Text style={styles.buttonText}>Tap me</Text>
        </TouchableOpacity>

        {/* Button B */}
        <TouchableOpacity
             style={styles.customButton}
             onPress={() => setCountB(countB + 1)}
        >
             <Text style={styles.buttonText}>Tap me</Text>
        </TouchableOpacity>
      </View>

    {/* Reset Button */}
    <View style={{ marginTop: 20 }}>
        <TouchableOpacity
                 style={styles.customButton2}
                 onPress={resetGame}
            >
            <Text style={styles.text}>🔄 Reset</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFDBE9',
  },
  title: {
    fontSize: 22,
    color: '#E680BA',
    fontFamily: 'Poppins_700Bold',
    fontWeight: 'bold',
    marginBottom: 1,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    color: '#E680BA',
    marginVertical: 1,
  },
  timer: {
      fontSize: 14,
      fontFamily: 'Poppins_700Bold',
      color: '#E680BA',
      marginVertical: 30,
  },
  image: {
    width: 420,
    height: 180,
    marginVertical: 1,
  },
  customButton: {
    backgroundColor: '#E680BA',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  customButton2: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 8,
      alignItems: 'center',
    },
  buttonText: {
    fontSize: 12,
    fontFamily: 'Poppins_700Bold',
    color: '#FFFFFF',
    marginVertical: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    marginTop: 1,
    gap: 20,
  },
  });
