import React from "react"
import "./Darkmode.css"

const darkmode = ({ handleToggleDarkMode }) => {
	return (
		<div className="dark">
			<button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
				Toggle Mode
			</button>
		</div>
	)
}

export default darkmode;