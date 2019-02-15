import React from 'react'

const ShowLists = (props) => {

	
	return (
		<form className="top" onSubmit={props.showLists}>
			<button>Show Lists</button>
		</form>
	)	
}

export default ShowLists