import React from 'react'

const ShowLists = (props) => {

	
	return (
		<form onSubmit={props.showLists}>
			<button>Show Your Lists</button>
		</form>
	)	
}

export default ShowLists