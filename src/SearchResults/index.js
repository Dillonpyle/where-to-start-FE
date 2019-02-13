import React from 'react'

const SearchResults = (props) => {
	console.log(props);
	return (
		<div>
			<img src={props.artist.image} />
			<h1>{props.artist.foundArtist}</h1>
			<p>{props.artist.description}</p>
			<img src={props.artist.topAlbumImg} />
			<h2>Start with this album: {props.artist.topAlbum}</h2>
			<img src={props.artist.topTrackImg} />
			<h2>Listen to this song: {props.artist.topTrack}</h2>
		</div>


	)
	
}

export default SearchResults