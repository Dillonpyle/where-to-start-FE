import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import ArtistSearch from './ArtistSearch'
import ArtistListContainer from './ArtistListContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Login />
       <ArtistSearch />
       <ArtistListContainer />
      </div>
    );
  }
}

export default App;
