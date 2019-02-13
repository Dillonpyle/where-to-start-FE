import React from 'react'

const AddButton = (props) => {
	
	return (
		<form onSubmit={props.addArtist}>
			<button>Add Artist</button>
		</form>

	)
	
}

export default AddButton