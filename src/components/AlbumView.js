import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAlbum from '../hooks/useAlbum';

const AlbumView = () => {
  const { album } = useAlbum();

  const mappedAlbum = album.map(({ id, title }) => {
    return (
      <li key={id}>
        <Link to={`/song/${id}`}>
          <h3>{title}</h3>
        </Link>
      </li>
    );
  });
  return (
    <ul>
      {mappedAlbum}
    </ul>
  );
};

export default AlbumView;