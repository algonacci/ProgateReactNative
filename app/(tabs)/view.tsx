import React from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";

export default function ViewScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{/* Tuliskan teks panjang di sini */}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "gray",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
    color: "white",
  },
});
