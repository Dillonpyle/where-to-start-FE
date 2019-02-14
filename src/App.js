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
      showLogin: false,
      showRegister: false
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

  toggleLogin = (e) => {
    e.preventDefault()
    console.log('showLogin was called');
    if (this.state.showLogin === false) {
      this.setState({
        showLogin: true,
      })  
    } else {
      this.setState({
        showLogin: false
      })
    }
  }

  toggleRegister = (e) => {
    e.preventDefault()
    console.log('showRegister was called');
    if (this.state.showRegister === false) {
      this.setState({
        showRegister: true,
      })  
    } else {
      this.setState({
        showRegister: false
      })
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Band Crackr</h1>
        <h3>Crack into your next favorite artist</h3>
        <h4>Login to create lists of artists</h4>
        <button onClick={this.toggleLogin.bind(null)}>Login</button>
        <button onClick={this.toggleRegister.bind(null)}>Register</button>
        {this.state.showLogin ? <Login login={this.login}/> : null}
        {this.state.showRegister ? <Register login={this.login}/> : null}
        <ArtistSearch userInfo={this.state} />
      </div>
    );
  }
}

export default App;
