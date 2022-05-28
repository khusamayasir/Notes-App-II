import React from "react"
import "./Header.css"

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className="header">
			<h1>Notes</h1>
			<button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
				Toggle Mode
			</button>
		</div>
	)
}

export default Header;