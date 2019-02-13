import React, { Component } from 'react'
import CreateArtistList from '../CreateArtistList'

class ArtistListContainer extends Component {
	constructor () {
		super ()

		this.state = {
			user: '',
			lists: []
		}
	}



	render () {
		return (
			<div>
				<CreateArtistList />
			</div>


		)
	}
}

export default ArtistListContainer