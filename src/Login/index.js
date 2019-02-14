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
		//console.log('handleSubmit was called');
		
		try {
			const loginResponse = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
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

			if (parsedResponse.data === null) {
				this.props.displayMessage(parsedResponse.message)
			} else {
				this.props.login(parsedResponse.loggedIn, parsedResponse.data)		
			}



		} catch (err) {
			console.log(err)
		}



	}

	render () {
		return (
			<div className="center">
				<h1>Login</h1>

				<form className="center" onSubmit={this.handleSubmit}>
					<label>
						Username:<br />
						<input name="username" placeholder="Enter Username..." value={this.state.username} onChange={this.handleChange} />
					</label><br />
					<label>
						Password:<br />
						<input name="password" placeholder="Enter Password..." value={this.state.password} onChange={this.handleChange} />
					</label><br />
					<button type="Submit">Login</button>
				</form>
			</div>
		)
	}
}

export default Login