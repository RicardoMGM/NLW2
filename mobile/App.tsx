import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// JSX
// View equivalente a uma div
// Todo texto é um text

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello NLW</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// React Native, não tem herança de estilo 
// Todos compenentes já vem com dilplay: 'flex' como padrão
// O padrão do flexDirection: 'column'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
