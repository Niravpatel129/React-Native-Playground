import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Searchbar from '../Components/Searchbar';

import yelp from '../api/yelp';

function Home() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async (term) => {
    const res = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'toronto',
      },
    });
    console.log(res);
    setResults(res.data);
  };

  const handleTermSubmit = () => {
    console.log('Submited:', term);
    searchApi(term);
    setTerm('');
  };

  return (
    <View style={styles.container}>
      <Searchbar
        term={term}
        handleTermChange={(text) => setTerm(text)}
        handleTermSubmit={handleTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Home;
