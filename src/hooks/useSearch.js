import React, { useState, useEffect } from 'react';
import getArtists from '../services/getArtists';

const useSearch = () => {
  const [artist, setArtist] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const setSearch = (value) => {
    setSearchTerm(value);
  };


  const search = (searchTerm) => {
    event.preventDefault();
    getArtists(searchTerm)
      .then(res => {
        setSearchResults(res.artists);
        
      });   
  };

  const updateArtist = (artist) => {
    console.log(artist)
    setArtist(artist);
  };

  return { artist, search, setSearch, searchTerm, searchResults, updateArtist };
};

export default useSearch;
