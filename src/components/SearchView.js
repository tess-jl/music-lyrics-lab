import React from 'react';
import PropTypes from 'prop-types';
import  getArtists  from '../services/getArtists';
import useSearch from '../hooks/useSearch';

const SearchView = ({ value, handleChange }) => {
  
  const { search, setSearch, searchTerm, searchResults } = useSearch();
  
  const artists = searchResults.map(({ id, name }) => {
    return (
      <li key={id}>
        {name}
      </li>
    );
  });

  return (
    <>
      <form onSubmit={() => search(searchTerm)} >
        <input type='text' value={value} onChange={(event) => setSearch(event.target.value)} placeholder='Artist Name'></input>
        <button>Search</button>
      </form>  
    
      <ul>
        {artists}
      </ul>
    </>
  );
    
};

SearchView.propTypes = {
    
};

export default SearchView;

