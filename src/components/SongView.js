import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useSong from '../hooks/useSong.js';


const SongView = () => {
  const { song } = useSong();
  


  return (
    <p>{song}</p>

  );
};

export default SongView;
