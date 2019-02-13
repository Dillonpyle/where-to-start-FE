import React, { Component } from 'react'

class CreateArtistlist extends Component {
	constructor () {
		super ()

		this.state = {
			userId: '',
			name: '',
			artists: []
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addList = (e) => {
		e.preventDefault()
		console.log('addList was called');
	}



	render () {
		console.log(this.state);
		return (
			<form onSubmit={this.addList}>
				<input type="text" name="name" placeholder="Name of playlist..." value={this.state.name} onChange={this.handleChange}/>
				<button type="Submit">Add Playlist</button>
			</form>


		)
	}
}

export default CreateArtistlist

