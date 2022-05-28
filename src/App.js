import React from "react"
import "./App.css"
import NotesEditor from "./components/NotesEditor/NotesEditor.js"
import Sidebar from "./components/Sidebar/Sidebar.js"
import Darkmode from "./components/Darkmode/Darkmode"

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

    const [notes, setNotes] = React.useState(
      JSON.parse(localStorage.getItem("notes-app")) || []
    );
  
    const addNote = (color) => {
      const tempNotes = [...notes];
  
      tempNotes.push({
        id: Date.now() + "" + Math.floor(Math.random() * 78),
        text: "",
        time: Date.now(),
        color: color,
      });
      setNotes(tempNotes);
    };
  
    const deleteNote = (id) => {
      const tempNotes = [...notes];
  
      const index = tempNotes.findIndex((item) => item.id === id);
      if (index < 0) return;
  
      tempNotes.splice(index, 1);
      setNotes(tempNotes);
    };
  
    const updateText = (text, id) => {
      const tempNotes = [...notes];
  
      const index = tempNotes.findIndex((item) => item.id === id);
      if (index < 0) return;
  
      tempNotes[index].text = text;
      setNotes(tempNotes);
    };
  
    React.useEffect(() => {
      localStorage.setItem("notes-app", JSON.stringify(notes));
    }, [notes]);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="App">
      <Sidebar addNote={addNote} />
      <NotesEditor
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
      <Darkmode handleToggleDarkMode={setDarkMode} />
    </div>
    </div>
  )
}