import React, { Component } from 'react'

class Register extends Component {
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
		//console.log('handleSubmit was called')

		//console.log('REACT_APP_API_URL', process.env.REACT_APP_API_URL);
		try {
			const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}


			const parsedResponse = await response.json()

			// console.log(parsedResponse, ' this is login response from express api');

			// if (parsedResponse.data === "login successful") {
			// 	console.log('you have logged in');
			// }
			console.log(parsedResponse.message);

			if (parsedResponse.data === null) {
				this.props.displayMessage(parsedResponse.message)
			} else {
				this.props.register(parsedResponse.loggedIn, parsedResponse.data)
			}

		} catch (err) {
			console.log(err)
		}



	}

	render () {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input name="username" value={this.state.username} onChange={this.handleChange} />
					</label>
					<label>
						Password:
						<input name="password" value={this.state.password} onChange={this.handleChange} />
					</label>
					<button type="Submit">Register</button>
				</form>
			</div>
		)
	}
}

export default Register