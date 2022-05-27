import React from "react"
import "./NotesEditor.css"
import Note from "../Notes/Notes.js"

export default function NotesEditor() {
  return (
    <div className="note-editor">
      <h2>Notes</h2>
      <div className="note-editor-notes">
        <Note 
        note={{
          text: "hey",
          time: "11:37 PM",
          color: "blue",
        }}
        />
        <Note 
        note={{
          text: "How are",
          time: "11:37 PM",
          color: "blue",
        }}
        />
        <Note 
        note={{
          text: "U",
          time: "11:37 PM",
          color: "blue",
        }}
        />
      </div>
    </div>
  )
}
