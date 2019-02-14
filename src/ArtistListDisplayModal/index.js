import React from 'react'
import CreateNewList from '../CreateNewList'

const ArtistListDisplayModal = (props) => {
	//console.log(props);
	const allArtistLists = props.lists.map((list) => {
		//console.log(list);
		return (		
			<li key={list._id}>
				<span>{list.name}
					<button onClick={props.addToList.bind(null, list._id)}>Add To List</button>
					<button onClick={props.deleteList.bind(null, list._id)}>Delete List</button>
				</span>
				{list.artists.map((artist) => <p key={artist.mbid}>{artist.artistName}<button onClick={props.removeFromList.bind(null, artist.mbid, list._id)}>X</button></p>)}		
			</li>



		)
	})
	

	return (
		<div>
			<button onClick={props.closeModal.bind(null)}>X</button>
			{props.userInfo.loggedIn ? <CreateNewList showLists={props.showLists} userInfo={props.userInfo}/> : null}
			<ul>
				{allArtistLists}
			</ul> 
		</div>

	)
}

export default ArtistListDisplayModal

