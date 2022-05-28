import React from "react"
import "./Sidebar.css"
import plusIcon from "../../assets/plus-icon.png"

export default function Sidebar(props) {

  const colours = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = React.useState(false);

  function toggleList(){
    setListOpen(prevState => !prevState)
  }

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={toggleList} />
      <ul className={`sidebar-list ${listOpen ? "sidebar-list_active" : ""}`}>
        {colours.map((color, index) => (
          <li
            key={index}
            className="sidebar-list-item"
            style={{ backgroundColor: color }}
            onClick={() => props.addNote(color)}
          />
        ))}
      </ul>
    </div>
  );
}
