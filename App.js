import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>DAVI DE JESUS</Text>
      <Text>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</Text>
      <Text>comunismo vencerá</Text>
      

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#842bd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
