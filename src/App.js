import React from "react"
import NotesEditor from "./components/NotesEditor/NotesEditor.js"
import Sidebar from "./components/Sidebar/Sidebar.js"

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <NotesEditor />
    </div>
  )
}
