import React from 'react'

const SearchResults = (props) => {
	console.log(props);
	return (
		<div className="center results-container modal">
			<h1 className="artist-name">{props.artist.artistName}</h1>
			
			<img className="artist-image" alt="Artist" src={props.artist.image} />
			<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.artist.description}</p>
			<div className="around-row width-100 ">
				<div className="artist-info-container-left">
					<h2 className="album-header">Start with this Album</h2>
					<h3 className="album-name">{props.artist.topAlbum}</h3>
					<img className="album-image" alt="Album" src={props.artist.topAlbumImg} />
				</div>
				<div className="artist-info-container-right">
					<div>
						<h2 className="text-left info-header">Start with these Songs:</h2>
						<div>
							<h3 className="text-left info-data">The hit: {props.artist.topTrack0}</h3>
							<h3 className="text-left info-data">A classic: {props.artist.topTrack3}</h3>
							<h3 className="text-left info-data">A deep cut: {props.artist.topTrack10}</h3>
						</div>
					</div><hr />
					<div>
						<h2 className="text-left info-header">Similar artists:</h2>
						<div>
							<h3 className="text-left info-data">{props.artist.similar[0]}</h3>
							<h3 className="text-left info-data">{props.artist.similar[1]}</h3>
							<h3 className="text-left info-data">{props.artist.similar[2]}</h3>
							<h3 className="text-left info-data">{props.artist.similar[3]}</h3>
						</div>
					</div>
				</div>
			</div>
			
		</div>


	)
	
}

export default SearchResults