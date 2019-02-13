import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Register from './Register'
import ArtistSearch from './ArtistSearch'
// import CreateNewList from './CreateNewList'
// import AuthContainer from './AuthContainer'


class App extends Component {
  constructor () {
    super ()

    this.state = {
      loggedIn: false,
      username: '',
    }
  }

  login = (loggedIn, data) => {
    console.log('login was called');
    console.log('value of loggedIn', loggedIn);
    this.setState({
      loggedIn: loggedIn,
      username: data.username
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Band Crackr</h1>
        <h3>Crack into your next favorite artist</h3>
        {this.state.loggedIn ? null : <div><Login login={this.login}/><Register login={this.login}/></div>}
        <ArtistSearch userInfo={this.state} />
      </div>
    );
  }
}

export default App;
