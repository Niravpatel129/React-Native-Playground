import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Resultslist from '../Components/Resultslist';
import Searchbar from '../Components/Searchbar';
import useResults from '../Hooks/useResults';
import { ScrollView } from 'react-native-gesture-handler';

function Home() {
  const [term, setTerm] = useState('');
  const [searchApi, results] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  const handleTermSubmit = () => {
    searchApi(term);
    setTerm('');
  };

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        term={term}
        handleTermChange={(text) => setTerm(text)}
        handleTermSubmit={handleTermSubmit}
      />
      <View style={styles.resultsList}>
        <Resultslist title="Expensive" results={filterResultsByPrice('$$$')} />
        <Resultslist title="Afforadable" results={filterResultsByPrice('$$')} />
        <Resultslist title="Frugal" results={filterResultsByPrice('$')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  resultsList: {
    // marginRight: 15,
  },
});

export default Home;
