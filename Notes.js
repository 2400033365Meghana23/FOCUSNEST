import { useState, useEffect } from "react";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;
    setNotes([...notes, input]);
    setInput("");
  };

  return (
    <div className="card">
      <h2>📌 Notes</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write a note"
      />
      <button onClick={addNote}>Save</button>

      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
