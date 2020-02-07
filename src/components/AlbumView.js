import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';

const AlbumView = () => {
  useAlbum();
  return (<div></div>);
};

export default AlbumView;
