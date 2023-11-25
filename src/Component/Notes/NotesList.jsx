// NotesList.jsx

import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ title, notes, onDelete, onArsip }) {
  const handleArsip = (noteId) => {
    
    const updatedNotes = notes.filter((note) => note.id !== noteId);
   
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
              onArsip={handleArsip} 
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
