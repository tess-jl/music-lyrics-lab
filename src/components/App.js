import React from 'react';
import SearchView from './SearchView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistView from './ArtistView'; 

export default function App() {
  return (
    <Router>
    
      <Route exact path='/' component={SearchView} />
      <Route path='/artist/:id' component={ArtistView} />
    </Router>
  );
}
  
