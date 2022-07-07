import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  function updateNote(event) {
    const { value, name } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={updateNote}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={updateNote}
          value={note.content}
        />
        <button
          onClick={() => {
            props.onAdd(note);
            setNote({ title: "", content: "" });
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
