import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const Searchbar = ({ term, handleTermChange, handleTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={35} color="black" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.textInput}
        value={term}
        onChangeText={(text) => handleTermChange(text)}
        onEndEditing={handleTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  icon: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 19,
  },
});

export default Searchbar;
