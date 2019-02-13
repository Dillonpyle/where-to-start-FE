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

	addList = (name) => {

		console.log('addList was called with name', name);

		//
	}



	render () {
		return (
			<div>
				<CreateArtistList addList={this.addList}/>
			</div>


		)
	}
}

export default ArtistListContainer