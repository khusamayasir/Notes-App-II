import React from "react"
import "./Notes.css";
import deleteIcon from "../../assets/delete-icon.png"

export default function Notes(props) {
  return (
    <div className= "note" style={{backgroundColor:props.note.color}}>
        <textarea className="note-text" defaultValue={props.note.text} />
        <div className="note-footer">
        <p>{formatDate(props.note.time)}</p>        
        <img src={deleteIcon} alt="DELETE" />
        </div>
    </div>
  )
}