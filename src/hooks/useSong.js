import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSong } from '../services/getSong';
import useSearch from '../hooks/useSearch';

const useSong = () => {
  const [song, setSong] = useState([]);
  const { artist } = useSearch();
  useEffect(() => {
    console.log(artist);
    // getSong(artist, songTitle)
    //   .then(res => setSong(res.lyrics));
  }, []);

  return { song };
}; 

export default useSong;
