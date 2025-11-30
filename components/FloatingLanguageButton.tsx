import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FloatingLanguageButton() {
  // Simple placeholder floating button. Replace with your real implementation.
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => {}}>
        <Text style={styles.text}>EN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 40,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#1e40af',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
  },
});
