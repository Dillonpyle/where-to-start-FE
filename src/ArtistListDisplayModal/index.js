import React from 'react'
import CreateNewList from '../CreateNewList'

const ArtistListDisplayModal = (props) => {
	//console.log(props);
	const allArtistLists = props.lists.map((list) => {
		//console.log(list);
		//console.log(props.artistName);
		return (		
			<div className="list-item width-100 center" key={list._id}>
				<div className="flex-row align-center">
					<h2 className="right">{list.name}</h2>
					{props.artistName ? <button className="right" onClick={props.addToList.bind(null, list._id)}>Add To List</button> : null}
					<button onClick={props.deleteList.bind(null, list._id)}>Delete List</button>
				</div>
				
				<div className=" width-100">
					<ul >
						{list.artists.map((artist) => 
							<div key={`container${artist.mbid}`} className="artist-list-container">
								<li className="artist-list-item" key={artist.mbid}>{artist.artistName}</li>
								<button key={`button${artist.mbid}`} className="delete-artist-button" onClick={props.removeFromList.bind(null, artist.mbid, list._id)}>X</button>
							</div>
						)}	
					</ul>
				</div>
				
					
			</div>



		)
	})
	

	return (
		<div className="center list-modal top">
			<div className="modal-exit">
				<button className="top left"onClick={props.closeModal.bind(null)}>X</button>
			</div>
			{props.userInfo.loggedIn ? <CreateNewList showLists={props.showLists} userInfo={props.userInfo}/> : null}<br />
			
			{allArtistLists}
			
		</div>

	)
}

export default ArtistListDisplayModal

