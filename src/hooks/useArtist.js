import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';
import { getArtist } from '../services/getArtist';

const useArtist = () => {
  const { id } = useParams();
  const [releases, setReleases] = useState([]);
  
  useEffect(() => {
    getArtist(id)
      .then(res => setReleases(res.releases));
  }, []);

  return { releases };
}; 

export default useArtist;
