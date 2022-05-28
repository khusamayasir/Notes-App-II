import React from "react"
import "./NotesEditor.css"
import Note from "../Notes/Notes.js"

export default function NotesEditor(props) {
  const reverseArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverseArray(props.notes);

  return (
    <div className="note-editor">
      <h2>Notes</h2>
      <div className="note-editor_notes custom-scroll">
      {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  )
}