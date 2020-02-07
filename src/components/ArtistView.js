import React from 'react'; 
import PropTypes from 'prop-types';
import useArtist from '../hooks/useArtist';
import { Link } from 'react-router-dom';

const ArtistView = ({ handleArtistSelection }) => {

  const { releases } = useArtist();

  const mappedReleases = releases.map(({ id, title }) => {
    return (
      <>
        <li key={id}>
          <Link to={`/album/${id}`}>
            <img src={`http://coverartarchive.org/release/${id}/front`} />
            <h3>{title}</h3>
          </Link>
        </li>
      </>
    );
  });
  return (
    <ul>
      {mappedReleases}
    </ul>
  );
};

export default ArtistView;
