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

	addList = async (listName) => {
		console.log('addList was called with name', listName);

		const newList = await fetch('http://localhost:9000/api/v1/artist-list', {
	    method: "POST", // *GET, POST, PUT, DELETE, etc.
	    headers: {
	      "Content-Type": "application/json",
	    },
	    credentials: 'include',
	    body: JSON.stringify({name: listName}), // body data type must match "Content-Type" header
	  })

	  if (!newList.ok) {
				throw Error(newList.statusText)
			}

	  const newListParsed = await newList.json()
	  console.log(newListParsed);
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