import React, { useState } from "react";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true);

  const rows = () =>
    notesToShow.map(note => <Note key={note.id} note={note} />);

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1
    };
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleNoteChange = event => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
//addNote function as an event handler to the form element that is called when
// the form is submitted by clicking the submit button.
//Use method discussed in part1 for defining event handler
//event.preventDefault() method prevents default action of submitting form ie reloading page on submit.
//target of event stored in event.target is logged to the console.
//in order to enable editing of input element (form box) needed to register event handler to synchronize changes made to input w/ comp's state. (onChange added).
//Event handler called every time a change occurs in the input element.
//Lines 9-24: Create new object for note called noteObject receives content from
// comp's newNote state. Unique id geenrated based on total # notes.
//Math.random note has 50% marked as important.
//Note note added to list of notes using concat array method.
//Method DOES NOT mutate original notes state array, makes a new one BC YOU MUST
//NEVER mutate state directly in React! (functional programming baby).
//event handlers resets the value of controlled input element by calling setNewNote function of newNote state.
//
//Conditional operator: const result = condition ? val1 : val2
//def: the result variable will be set to the value of val1 if condition is true.
// if condition is false, the result variable will be set to the value of val2.
//
