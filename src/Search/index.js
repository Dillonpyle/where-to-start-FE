import React, { Component } from 'react'

class Search extends Component {
	constructor () {
		super()

		this.state = {
			searchArtist: ''
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})	
	}

	render () {
		return (
			<form className="flex-row" onSubmit={this.props.searchArtist.bind(null, this.state.searchArtist)}>
				
					<input className="right" name="searchArtist" placeholder='Enter artist name...' value={this.state.searchArtist} onChange={this.handleChange} />
			
				<button type="Submit">Search Artist</button>
			</form>


		)
	}
}

export default Search
				