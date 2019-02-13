import React from 'react'

const SearchResults = (props) => {
	//console.log(props);
	return (
		<div>
			<h1>{props.artist.foundArtist}</h1>
			<img alt="Artist" src={props.artist.image} />
			<p>{props.artist.description}</p>
			<h2>Start with this Album:<br /> {props.artist.topAlbum}</h2>
			<img alt="Album" src={props.artist.topAlbumImg} />
			<h2>Start with these Songs:</h2>
			<span>
				<h3>The hit: {props.artist.topTrack0}</h3>
				<h3>A classic: {props.artist.topTrack3}</h3>
				<h3>A deep cut: {props.artist.topTrack10}</h3>
			</span>
			
		</div>


	)
	
}

export default SearchResults