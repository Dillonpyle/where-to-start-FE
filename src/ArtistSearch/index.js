import React, { Component } from 'react'

class ArtistSearch extends Component {
	constructor () {
		super ()

		this.state = {
			searchArtist: '',
			foundArtist: '',
			mbid: '',
			image: '',
			description: ''		
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		console.log('handleSubmit was called');

		try {
			const response = await fetch ('http://localhost:9000/api/v1/artist', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',
				body: JSON.stringify(this.state)
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse);

			this.setState({
				searchArtist: '',
				foundArtist: parsedResponse.data.artist.name,
				mbid: parsedResponse.data.artist.mbid,
				image: parsedResponse.data.artist.image[3]['#text'],
				description: parsedResponse.data.artist.bio.summary
			})

			
		} catch (err) {
			console.log(err)
		}
	}

	render () {
		console.log(this.state);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Artist:
						<input name="searchArtist" value={this.state.searchArtist} onChange={this.handleChange} />
					</label>
					<button type="Submit">Search Artist</button>
				</form>
			</div>

		)
	}
}

export default ArtistSearch