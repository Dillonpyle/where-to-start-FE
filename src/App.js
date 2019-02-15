import React, { Component } from 'react';
import './App.css';
import Login from './Login'
import Register from './Register'
import MainDisplay from './MainDisplay'
require('dotenv').config()
// import CreateNewList from './CreateNewList'
// import AuthContainer from './AuthContainer'


class App extends Component {
  constructor () {
    super ()

    this.state = {
      loggedIn: false,
      username: '',
      showLogin: false,
      showRegister: false,
      message: 'Login to create lists of artists',
      displayMessage: true,
      userId: ''
    }
  }

  login = (loggedIn, data) => {
    // console.log('login was called');
    // console.log('value of loggedIn', loggedIn);
    this.setState({
      loggedIn: loggedIn,
      username: data.username,
      displayMessage: false,
      userId: data._id
    })
    this.toggleLogin()
  }

  register = (loggedIn, data) => {
    // console.log('login was called');
    // console.log('value of loggedIn', loggedIn);
    // console.log('this is data', data);
    this.setState({
      loggedIn: loggedIn,
      username: data.username,
      displayMessage: false,
      userId: data._id
    })
    this.toggleRegister()
  }

  logout = async (e) => {
    e.preventDefault()
    //console.log('logout was called');

    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`)

    if (!response.ok) {
      throw Error (response.statusText)
    }

    const parsedResponse = await response.json()
    //console.log(parsedResponse);

    this.setState({
      loggedIn: parsedResponse.loggedIn,
      username: '',
      userId: '',
      message: 'Login to create lists of artists',
      displayMessage: true
    })
  }

  toggleLogin = (e) => {
    if (e) {
      e.preventDefault() 
    }
    //console.log('showLogin was called');
    if (this.state.showLogin === false) {
      this.setState({
        showLogin: true,
        showRegister: false
      })  
    } else {
      this.setState({
        showLogin: false
      })
    }
  }

  toggleRegister = (e) => {
    if (e) {
      e.preventDefault()
    }
    //console.log('showRegister was called');
    if (this.state.showRegister === false) {
      this.setState({
        showRegister: true,
        showLogin: false
      })  
    } else {
      this.setState({
        showRegister: false
      })
    }
  }

  displayMessage = (message) => {
    //console.log('displayMessage was called');
    this.setState({
      displayMessage: true,
      message: message
    })
  }


  render() {
    return (
      <div className="appContainer center">
        <header className="center">
          <nav>
            <div className="left">
              <h1>Band Crackr</h1> 
            </div>
            <div className="right flex-row align-center">
              {this.state.displayMessage ? <h4 className="right">{this.state.message}</h4> : null}
              {this.state.loggedIn ? null : <button className="right" onClick={this.toggleLogin.bind(null)}>Login</button>}
              {this.state.loggedIn ? null : <button onClick={this.toggleRegister.bind(null)}>Register</button>}
              {this.state.loggedIn ? <button onClick={this.logout.bind(null)}>Logout</button> : null}
            </div>
          </nav>
        </header>
        <main className="center">
          {this.state.showLogin ? <Login login={this.login} displayMessage={this.displayMessage}/> : null}
          {this.state.showRegister ? <Register register={this.register} displayMessage={this.displayMessage}/> : null}  
          <h1>Find Your Next Favorite Band</h1>
          <MainDisplay userInfo={this.state} />
        </main>
      </div>
    );
  }
}

export default App;
