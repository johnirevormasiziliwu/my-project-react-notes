// NotesList.jsx

import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ title, notes, onDelete, onArsip }) {
  const handleArsip = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);

    onArsip(noteId, updatedNotes);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold py-5 text-center md:text-start">{title}</h1>
      <div className="md:grid grid-cols-4 gap-4">
  {notes.length > 0 ? (
    notes.map((note) => (
      <NotesItem
        key={note.id}
        id={note.id}
        onDelete={onDelete}
        onArsip={handleArsip}
        {...note}
      />
    ))
  ) : (
    <div className="col-span-4 flex items-center justify-center">
      <p className="text-center">Tidak Ada Catatan</p>
    </div>
  )}
</div>

    </div>
  );
}

export default NotesList;
