import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const Heading = ({ heading, onPress }) => (
  <View style={styles.heading}>
    <Text style={styles.text}>{heading}</Text>
    <Pressable onPress={onPress} style={styles.pressable}>
      <Ionicons name="grid" size={24} color="#333" />
      {/* Or you can use a Text component */}
      {/* <Text style={styles.pressableText}>+</Text> */}
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  heading: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  pressable: {
    padding: 5,
  },
  pressableText: {
    fontSize: 20,
    color: '#333',
  },
});

export default Heading;
