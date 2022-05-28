import React from "react"
import "./SearchNote.css"
//import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
	return (
		<div className = "search">
			<input
				onChange={(event) => handleSearchNote(event.target.value)}
				type = "text"
				placeholder = "type to search..."
			/>
		</div>
	)
}

export default Search;