import React from 'react'

const SearchResults = (props) => {
	console.log(props);
	return (
		<div className="center results-container modal">
			<h1>{props.artist.artistName}</h1>
			
			<img alt="Artist" src={props.artist.image} />
			<p>&nbsp;&nbsp;&nbsp;&nbsp;{props.artist.description}</p>
			<div className="around-row width-100 ">
				<div>
					<h2 className="album-header">Start with this Album</h2>
					<h3 className="album-name">{props.artist.topAlbum}</h3>
					<img alt="Album" src={props.artist.topAlbumImg} />
				</div>
				<div className="">
					<div>
						<h2 className="text-left">Start with these Songs:</h2>
						<div>
							<h3 className="text-left">The hit: {props.artist.topTrack0}</h3>
							<h3 className="text-left">A classic: {props.artist.topTrack3}</h3>
							<h3 className="text-left">A deep cut: {props.artist.topTrack10}</h3>
						</div>
					</div><hr />
					<div>
						<h2 className="text-left">Similar artists:</h2>
						<div>
							<h3 className="text-left">{props.artist.similar[0]}</h3>
							<h3 className="text-left">{props.artist.similar[1]}</h3>
							<h3 className="text-left">{props.artist.similar[2]}</h3>
							<h3 className="text-left">{props.artist.similar[3]}</h3>
						</div>
					</div>
				</div>
			</div>
			
		</div>


	)
	
}

export default SearchResults