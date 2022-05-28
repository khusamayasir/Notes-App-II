import React from "react"
import "./App.css"
import Sidebar from "./components/Sidebar/Sidebar.js"
import Darkmode from "./components/Darkmode/Darkmode"
import Search from "./components/SearchNote/SearchNote"
import NotesEditor from "./components/NotesEditor/NotesEditor.js"

export default function App() {

  const [searchText, setSearchText] = React.useState('');

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
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText))}
        deleteNote={deleteNote}
        updateText={updateText}
      />
      <Search handleSearchNote={setSearchText}/>
      <Darkmode handleToggleDarkMode={setDarkMode} />

    </div>
    </div>
  )
}