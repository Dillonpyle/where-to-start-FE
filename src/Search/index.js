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
			<form onSubmit={this.props.searchArtist.bind(null, this.state.searchArtist)}>
				<label>
					Artist:
					<input name="searchArtist" placeholder='search an artist' value={this.state.searchArtist} onChange={this.handleChange} />
				</label>
				<button type="Submit">Search Artist</button>
			</form>


		)
	}
}

export default Search
				