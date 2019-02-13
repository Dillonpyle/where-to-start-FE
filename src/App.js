import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import ArtistSearch from './ArtistSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Login />
       <ArtistSearch />
      </div>
    );
  }
}

export default App;
