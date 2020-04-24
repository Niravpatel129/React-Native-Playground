import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Searchbar = () => {
  return (
    <View style={styles.background}>
      <Text>
        <Ionicons name="md-search" size={32} color="green" /> Searchbar
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default Searchbar;
