import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Resultsitem = ({ item }) => {
  //   console.log(item.image_url);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image_url }} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.extra}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

export default Resultsitem;

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  extra: {
    // fontSize: 10,
  },
});
