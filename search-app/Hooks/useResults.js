import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async (term) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'toronto',
        },
      });
      setResults(res.data.businesses);
    } catch (e) {
      alert('something went wrong!');
    }
  };

  return [searchApi, results];
};
