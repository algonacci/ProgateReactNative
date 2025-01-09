import React from "react";
import {
  StyleSheet,
  FlatList,
  Button,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";

const items = [
  {
    id: "1",
    title: "Item Pertama",
  },
  {
    id: "2",
    title: "Item Kedua",
  },
  {
    id: "3",
    title: "Item Ketiga",
  },
  {
    id: "4",
    title: "Item Keempat",
  },
  {
    id: "5",
    title: "Item Kelima",
  },
  {
    id: "6",
    title: "Item Keenam",
  },
  {
    id: "7",
    title: "Item Ketujuh",
  },
  {
    id: "8",
    title: "Item Kedelapan",
  },
  {
    id: "9",
    title: "Item Kesembilan",
  },
  {
    id: "10",
    title: "Item Kesepuluh",
  },
];

const Item = ({ title }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function TabTwoScreen() {
  const renderItem = ({ item }: any) => <Item title={item.title} />;

  const [count, setCount] = React.useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          explicabo. Pariatur sapiente doloremque neque optio aliquid delectus
          quae? Necessitatibus ipsum enim vel tempora cum, deleniti omnis rem
          omnis sequi. Reprehenderit, optio unde.
        </Text>
      </ScrollView>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <Button
        title="Default Button"
        onPress={() => Alert.alert("Simple Button")}
      />

      <Button
        title="Color Button"
        color="#f194ff"
        onPress={() => Alert.alert("Color Button")}
      />
      <Button
        title="Disabled Button"
        disabled
        onPress={() => Alert.alert("Disable Button")}
      />

      <Text style={styles.text2}>You clicked {count} times</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text2: {
    color: "#FFF",
  },
  button: {
    backgroundColor: "#674f74",
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#FFF",
  },
});
