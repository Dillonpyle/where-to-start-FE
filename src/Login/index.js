import React, { Component } from 'react'

class Login extends Component {
	constructor () {
		super ()

		this.state = {
			username: '',
			password: '',
		}
	}

	handleChange = (e) => {
		this.setState ({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('handleSubmit was called');
	}

	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Username:
					<input name="username" value={this.state.username} onChange={this.handleChange} />
				</label>
				<label>
					Password:
					<input name="password" value={this.state.password} onChange={this.handleChange} />
				</label>
				<button type="Submit">Login</button>
			</form>
		)
	}
}

export default Login