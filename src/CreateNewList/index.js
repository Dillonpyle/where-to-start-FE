import React, { Component } from 'react'

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

		const newList = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/artist-list/new`, {
	    method: "POST", 
	    headers: {
	      "Content-Type": "application/json",
	    },
	    credentials: 'include',
	    body: JSON.stringify({
    		user: this.props.userInfo.username,
				userId: this.props.userInfo.userId,
				name: this.state.listName
	    }), 
	  })

	  if (!newList.ok) {
			throw Error(newList.statusText)
		}

	  this.setState({
	  	listName: ''
	  })

	  this.props.showLists()

	}

	render () {
		return (
			<div className="center">
				<h3 className="list-title">Create New List</h3>
				<form className="flex-row align-center"onSubmit={this.addList}>
						<input className="right" type="text" name="listName" placeholder="Name of list..." value={this.state.listName} onChange={this.handleChange}/>
					<button type="Submit">Create</button>
				</form>
			</div>
		)
	}
}

export default CreateNewList