import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteServices from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    noteServices.getAll().then((rsp) => setNotes(rsp));
  }, []);

  const toggleImportanceOf = (id) => {
    console.log(notes, `importantce of ${id} needs to be toggled`);

    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteServices.update(id, changedNote).then((rsp) => {
      console.log(`${id} has been toggled`, rsp.data);
      setNotes(notes.map((note) => (note.id !== id ? note : rsp.data)));
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
