import React from "react"
import "./Sidebar.css"
import plusIcon from "../../assets/plus-icon.png"

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={plusIcon} alt="AddNote" />
      <ul className="sidebar-list">
        <li className="sidebar-list-item"></li>
      </ul>
    </div>
  )
}
