import React, { Component } from 'react'
import SearchResults from '../SearchResults'
import AddArtist from '../AddArtist'

class ArtistSearch extends Component {
	constructor () {
		super ()

		this.state = {
			searchArtist: '',
			foundArtist: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addArtist = (e) => {
		e.preventDefault()
		console.log('add artist was called');
	}

	handleSubmit = async (e) => {
		e.preventDefault()
		//console.log('handleSubmit was called');

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
			const description = parsedResponse.info.artist.bio.summary.split(' <a')[0]

			this.setState({
				searchArtist: '',
				foundArtist: parsedResponse.info.artist.name,
				topAlbum: parsedResponse.albums.topalbums.album[0].name,
				topAlbumImg: parsedResponse.albums.topalbums.album[0].image[3]['#text'],
				topTrack0: parsedResponse.tracks.toptracks.track[0].name,
				topTrack3: parsedResponse.tracks.toptracks.track[3].name,
				topTrack10: parsedResponse.tracks.toptracks.track[10].name,
				mbid: parsedResponse.info.artist.mbid,
				image: parsedResponse.info.artist.image[3]['#text'],
				description: description
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
				{this.state.foundArtist ? <AddArtist addArtist={this.addArtist}/> : null}
				{this.state.foundArtist ? <SearchResults artist={this.state}/> : null}
			</div>

		)
	}
}

export default ArtistSearch