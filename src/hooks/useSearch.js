import React, { useState, useEffect } from 'react';
import getArtists from '../services/getArtists';

const useSearch = () => {
  const [artist, setArtist] = useState({});
  const [searchResults, setSearchResults] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const setSearch = (value) => {
    setSearchTerm(value);
  };


  const search = (searchTerm) => {
    console.log(searchTerm);
    event.preventDefault();
    getArtists(searchTerm)
      .then(res => {
        res.artists.map(artist => {
          setSearchResults(res);
          return {
            name: artist.name
          };
        });
      });   
  };
  return { artist, search, setSearch, searchTerm };
};

export default useSearch;
