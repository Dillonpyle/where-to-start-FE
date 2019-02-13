import React, { Component } from 'react'

class CreateArtistlist extends Component {
	constructor () {
		super ()

		this.state = {
			name: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addList(this.state.name)
		this.setState({
			name: '',
		})
	}


	render () {
		//console.log(this.state);
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" name="name" placeholder="Name of playlist..." value={this.state.name} onChange={this.handleChange}/>
				<button type="Submit">Create Artist List</button>
			</form>


		)
	}
}

export default CreateArtistlist

