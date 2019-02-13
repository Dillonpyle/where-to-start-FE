import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import ArtistSearch from './ArtistSearch'
import CreateNewList from './CreateNewList'

class App extends Component {


  render() {
    return (
      <div className="App">
        <h1>Band Crackr</h1>
        <h3>Crack into your next favorite artist</h3>
        <Login />
        <CreateNewList />
        <ArtistSearch />
      </div>
    );
  }
}

export default App;
