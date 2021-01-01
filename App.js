import * as React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import InputText from './components/InputText';

export default function App() {
  return (
    <View style={styles.container}>
      <InputText/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});