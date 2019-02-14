import React, { Component } from 'react'
//import CreateArtistList from '../CreateArtistList'
//import ArtistListDisplayModal from '../ArtistListDisplayModal'

class CreateNewList extends Component {
	constructor () {
		super ()

		this.state = {
			displayModal: false,
			listName: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	addList = async (e) => {
		e.preventDefault()

		console.log(this.state);

		//console.log('addList was called with name', this.state.listName);

		const newList = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/artist-list/new`, {
	    method: "POST", // *GET, POST, PUT, DELETE, etc.
	    headers: {
	      "Content-Type": "application/json",
	    },
	    credentials: 'include',
	    body: JSON.stringify({
    		user: this.props.userInfo.username,
				userId: this.props.userInfo.userId,
				name: this.state.listName
	    }), // body data type must match "Content-Type" header
	  })

	  if (!newList.ok) {
			throw Error(newList.statusText)
		}

	  //const newListParsed = await newList.json()
	  //console.log(newListParsed);

	  this.setState({
	  	listName: ''
	  })

	  this.props.showLists()

	}



	render () {
		//console.log('userInfo on CreateNewList',this.props.userInfo);
		return (
			<div>
				<form onSubmit={this.addList}>
					<input type="text" name="listName" placeholder="Name of playlist..." value={this.state.listName} onChange={this.handleChange}/>
					<button type="Submit">Create Artist List</button>
				</form>

			</div>


		)
	}
}

export default CreateNewList