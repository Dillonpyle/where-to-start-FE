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

	handleSubmit = async (e) => {
		e.preventDefault()
		console.log('handleSubmit was called');
		
		try {
			const loginResponse = await fetch('http://localhost:9000/authentication', {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			if (!loginResponse.ok) {
				throw Error (loginResponse.statusText)
			}

			const parsedResponse = await loginResponse.json()

			console.log(parsedResponse, ' this is login response from express api');

			if (parsedResponse.data === "login successful") {
				console.log('you have logged in');
			}





		} catch (err) {
			console.log(err)
		}



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