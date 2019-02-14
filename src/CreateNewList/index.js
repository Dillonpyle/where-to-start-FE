import React, { Component } from 'react'
//import CreateArtistList from '../CreateArtistList'
//import ArtistListDisplayModal from '../ArtistListDisplayModal'

class CreateNewList extends Component {
	constructor () {
		super ()

		this.state = {
			user: '',
			displayModal: false,
			listName: '',
			userId: '',
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}

	addList = async (e) => {
		e.preventDefault()
		this.setState({
			user: this.props.userInfo.username,
			userId: this.props.userInfo.userId
		})

		console.log(this.state);

		//console.log('addList was called with name', this.state.listName);

		const newList = await fetch('http://localhost:9000/api/v1/artist-list', {
	    method: "POST", // *GET, POST, PUT, DELETE, etc.
	    headers: {
	      "Content-Type": "application/json",
	    },
	    credentials: 'include',
	    body: JSON.stringify(this.state), // body data type must match "Content-Type" header
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