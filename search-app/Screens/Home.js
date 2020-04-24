import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Searchbar from "../Components/Searchbar";

function Home() {
  return (
    <View style={styles.container}>
      <Searchbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Home;
