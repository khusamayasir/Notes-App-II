import React from "react"
import "./Sidebar.css"
import plusIcon from "../../assets/plus-icon.png"

export default function Sidebar() {
  const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="AddNote" />
      <ul className="sidebar-list">
        {
          colors.map((item,index) => 
          <li 
          key={index} 
          className="sidebar-list-item" 
          style={{backgroundColor:item}}/>)
        }
        </ul>
        
    </div>
  )
}
