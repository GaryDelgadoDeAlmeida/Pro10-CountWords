import * as React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default function InputText() {
  const [nbrLenght, setNbrLength] = React.useState('');

  function handleChange(event) {
    let words = event.target.value.trim().split(" ");
    let nbrWordsLenght = "";

    words.map((oneWord) => nbrWordsLenght += " " + oneWord.length);
    setNbrLength(nbrWordsLenght);
  }

  return (
    <View style={styles.inputView}>
      <Text style={styles.label}>Veuillez saisir un text :</Text>
      <TextInput style={styles.input} onChange={(event) => handleChange(event)}/>
      <Text>{nbrLenght}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
    fontWeight: 500,
  },
  inputView: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#f1f1f1",
    height: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});
