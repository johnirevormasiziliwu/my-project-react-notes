// NotesList.jsx

import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ title, notes, onDelete, onArsip }) {
  const handleArsip = (noteId) => {
    // Implement your logic to move the note to the archive
    // For example, you can filter out the note with the given id
    // from the active notes and add it to the archive.
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    // Perform the archiving logic, for example, by updating state.
    // You may have a function in your parent component to handle this.
    onArsip(noteId, updatedNotes);
  };

  return (
    <div className="notes-list my-5">
      <h1 className="note-list__title md:text-start text-center md:ml-[50px] ml-4 my-5 text-2xl font-semibold">
        {title}
      </h1>
      <div className="flex flex-wrap justify-around w-full">
        {notes.length > 0 ? (
          notes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArsip={handleArsip} // Pass the handleArsip function to NotesItem
              {...note}
            />
          ))
        ) : (
          <p>Tidak Ada Catatan</p>
        )}
      </div>
    </div>
  );
}

export default NotesList;
