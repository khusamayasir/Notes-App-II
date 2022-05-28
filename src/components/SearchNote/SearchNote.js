import React from "react"
import "./SearchNote.css"

const Search = ({ handleSearchNote }) => {
	return (
		<div className = "search">
			<input className="search-text" onChange={(event) => handleSearchNote(event.target.value)} type = "text" placeholder = "type to search..."/>
		</div>
	)
}

export default Search;