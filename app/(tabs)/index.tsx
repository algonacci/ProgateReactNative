import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [question, setQuestion] = useState();

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 40 }}>Hello React Native</Text>
      </View>
      <View style={{ flexDirection: "row", height: 100 }}>
        <View style={{ backgroundColor: "blue", flex: 1 }} />
        <View style={{ backgroundColor: "red", flex: 1 }} />
        <View style={{ backgroundColor: "green", flex: 1 }} />
      </View>
      <View>
        <Text style={{ fontSize: 30 }}>
          <Text style={{ fontWeight: "bold" }}>Belajar Progate</Text>
          <Text>Saat ini aku sedang berlajar mengenai text komponen</Text>
          <View>
            <Text>Ayo belajar dengan Guru Domba</Text>
          </View>
        </Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.title}>React Native - Prograte</Text>
        <Text style={styles.title}>React Native - Prograte</Text>
        <Text style={styles.title}>React Native - Prograte</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://progate.com/images/ogp/about.png",
          }}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Masukan Nama"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukan Umur"
          onChangeText={setAge}
          value={age}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.multiLineInput}
          placeholder="Masukan pertanyaan"
          multiline={true}
          numberOfLines={3}
          onChangeText={setQuestion}
          value={question}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container1: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  multiLineInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
