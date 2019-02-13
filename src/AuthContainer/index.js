import React, { Component } from 'react'
import Login from '../Login'
import Register from '../Register'

class AuthContainer extends Component {
	constructor () {
		super()

		this.state = {
			loggedIn: false
		}
	}

	render () {
		return (
			<div>
				{this.state.loggedIn ? null : <div><Login /><Register /></div>}
			</div>


		)
	}
}

export default AuthContainer