import React from "react"
import "./dark.css"

const Darkmode = ({ handleToggleDarkMode }) => {
	return (
		<div className="dark">
			<button className="btn" onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)}>
				Toggle Mode
			</button>
		</div>
	)
}

export default Darkmode;