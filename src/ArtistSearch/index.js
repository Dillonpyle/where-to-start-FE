import React, { Component } from 'react'
import SearchResults from '../SearchResults'

class ArtistSearch extends Component {
	constructor () {
		super ()

		this.state = {
			searchArtist: '',
			foundArtist: '',
			mbid: '',
			image: '',
			description: '',
			topAlbum: '',
			topTrack: '',	
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
				foundArtist: parsedResponse.info.artist.name,
				topAlbum: parsedResponse.albums.topalbums.album[0].name,
				topAlbumImg: parsedResponse.albums.topalbums.album[0].image[3]['#text'],
				topTrack: parsedResponse.tracks.toptracks.track[3].name,
				topTrackImg: parsedResponse.tracks.toptracks.track[3].image[3]['#text'],
				mbid: parsedResponse.info.artist.mbid,
				image: parsedResponse.info.artist.image[3]['#text'],
				description: parsedResponse.info.artist.bio.summary
			})

			
		} catch (err) {
			console.log(err)
		}
	}

	render () {
		//console.log(this.state);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Artist:
						<input name="searchArtist" placeholder='search an artist' value={this.state.searchArtist} onChange={this.handleChange} />
					</label>
					<button type="Submit">Search Artist</button>
				</form>
				<SearchResults artist={this.state}/>
			</div>

		)
	}
}

export default ArtistSearch