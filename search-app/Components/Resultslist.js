import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Resultsitem from './Resultsitem';

const Resultslist = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => {
          return result.id;
        }}
        renderItem={({ item }) => {
          return <Resultsitem item={item} />;
        }}
      />
    </View>
  );
};

export default Resultslist;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    marginLeft: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
