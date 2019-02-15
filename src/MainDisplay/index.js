import React, { Component } from 'react'
import Search from '../Search'
import SearchResults from '../SearchResults'
import ShowLists from '../ShowLists'
import ArtistListDisplayModal from '../ArtistListDisplayModal'

class MainDisplay extends Component {
	constructor () {
		super ()

		this.state = {
			showLists: false,
			lists: [],
			searchArtist: '',
			artistName: '',
			mbid: '',
			topAlbum: '',
			topAlbumImg: '',
			topTrack0: '',
			topTrack3: '',
			topTrack10: '',
			image: '',
			description: '',
			similar: [],
			tags: [],
		}
	}

	showLists = async (e) => {
		if (e) {
			e.preventDefault()
		}

		try {
			
			// need to call db for all lists and display them in modal
			const response = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/artist-list`,{
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',
				body: JSON.stringify({userId: this.props.userInfo.userId})
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}

			const parsedResponse = await response.json()
			console.log(parsedResponse);

			this.setState({
				showLists: true,
				lists: [...parsedResponse.data]
			})
		} catch (err) {
			console.log(err)
		}
	}

	addToList = async (listId, e) => {
		e.preventDefault()

		try {
			const response = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/artist-list/${listId}`, {
				method: 'PUT',
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',
				body: JSON.stringify(this.state)
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}

			this.showLists()



		} catch (err) {
			console.log(err)
		}
	}

	deleteList = async (listId, e) => {
		e.preventDefault()

		try {
			const response = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/artist-list/${listId}`, {
				method: 'DELETE',
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',
				body: JSON.stringify(this.state)
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}
			
			this.showLists()

		} catch (err) {
			console.log(err)
		}
	}

	removeFromList = async (artistId, listId, e) => {

		try {
			const response = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/artist-list/${listId}/${artistId}/delete`, {
				method: 'PUT',
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',
				body: JSON.stringify(this.state)
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}

			this.showLists()
			
		} catch (err) {
			console.log(err)
		}
	}

	closeModal = (e) => {

		this.setState ({
			showLists: false
		})
	}

	searchArtist = async (query, e) => {
		e.preventDefault()

		try {
			const response = await fetch (`${process.env.REACT_APP_API_URL}/api/v1/artist`, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				credentials: 'include',
				body: JSON.stringify({artist: query})
			})

			if (!response.ok) {
				throw Error (response.statusText)
			}

			const parsedResponse = await response.json()

			// remove embedded html from artist description
			const description = parsedResponse.info.artist.bio.summary.split(' <a')[0]

			// get names of similar artists
			const similarNames = parsedResponse.info.artist.similar.artist.map((artist) => artist.name)

			const tags = parsedResponse.info.artist.tags.tag.map((tag) => tag.name)

			this.setState({
				searchArtist: '',
				artistName: parsedResponse.info.artist.name,
				topAlbum: parsedResponse.albums.topalbums.album[0].name,
				topAlbumImg: parsedResponse.albums.topalbums.album[0].image[3]['#text'],
				topTrack0: parsedResponse.tracks.toptracks.track[0].name,
				topTrack3: parsedResponse.tracks.toptracks.track[3].name,
				topTrack10: parsedResponse.tracks.toptracks.track[10].name,
				mbid: parsedResponse.info.artist.mbid,
				image: parsedResponse.info.artist.image[3]['#text'],
				description: description,
				similar: [...similarNames],
				tags: [...tags]
			})

			
		} catch (err) {
			console.log(err)
		}
	}

	render () {
		return (
			<div className="center width-100">
				<Search searchArtist={this.searchArtist}/>
				{this.props.userInfo.loggedIn && !this.state.showLists ? <ShowLists showLists={this.showLists}/> : null}
				{this.state.showLists && this.props.userInfo.loggedIn ? <ArtistListDisplayModal artistName={this.state.artistName} lists={this.state.lists} userInfo={this.props.userInfo} deleteList={this.deleteList} showLists={this.showLists} addToList={this.addToList} removeFromList={this.removeFromList} closeModal={this.closeModal}/> : null}
				{this.state.artistName ? <SearchResults artist={this.state}/> : null}
			</div>

		)
	}
}

export default MainDisplay