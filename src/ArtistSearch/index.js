import React, { Component } from 'react'
import SearchResults from '../SearchResults'
import ShowLists from '../ShowLists'
import ArtistListDisplayModal from '../ArtistListDisplayModal'

class ArtistSearch extends Component {
	constructor () {
		super ()

		this.state = {
			searchArtist: '',
			foundArtist: '',
			showLists: false,
			lists: []
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	showLists = async (e) => {
		e.preventDefault()
		console.log('showLists was called');

		// need to call db for all lists and display them in modal
		const response = await fetch ('http://localhost:9000/api/v1/artist-list')

		if (!response.ok) {
			throw Error (response.statusText)
		}

		const parsedResponse = await response.json()
		console.log(parsedResponse);

		this.setState({
			showLists: true,
			lists: [...parsedResponse.data]
		})
	}

	addToList = async (e, listID) => {
		e.preventDefault()
		console.log('add to list was called');
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
				{this.state.foundArtist ? <ShowLists showLists={this.showLists}/> : null}
				{this.state.showLists ? <ArtistListDisplayModal lists={this.state.lists} addToList={this.addToList}/> : null}
				{this.state.foundArtist ? <SearchResults artist={this.state}/> : null}
			</div>

		)
	}
}

export default ArtistSearch