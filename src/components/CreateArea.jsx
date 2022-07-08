import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });
  function updateNote(event) {
    const { value, name } = event.target;
    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }
  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={updateNote}
            value={note.title}
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={updateNote}
          onSelect={expand}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab
            onClick={(event) => {
              props.onAdd(note);
              setNote({ title: "", content: "" });
              event.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
