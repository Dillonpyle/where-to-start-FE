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
			<div className="center modal">
				<h1>Register</h1>
				<form className="center" onSubmit={this.handleSubmit}>
					<label>
						Username:<br />
						<input name="username" placeholder="Enter Username..." value={this.state.username} onChange={this.handleChange} />
					</label><br />
					<label>
						Password:<br />
						<input name="password" type="password" placeholder="Enter Password..." value={this.state.password} onChange={this.handleChange} />
					</label><br />
					<button type="Submit">Register</button>
				</form>
			</div>
		)
	}
}

export default Register