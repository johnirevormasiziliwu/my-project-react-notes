// NotesApp.jsx

import React from "react";
import { getData } from "../../data";
import NotesList from "./NotesList";
import Navbar from "../Navbar/Navbar";
import FormInput from "../Form/FormInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      searchQuery: "",
      archivedNotes: [],
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onDeleteArchivedNotesHandler =
      this.onDeleteArchivedNotesHandler.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
    this.onBackNotesHandler = this.onBackNotesHandler.bind(this);
  }

  onDeleteNotesHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onDeleteArchivedNotesHandler(id) {
    const archivedNotes = this.state.archivedNotes.filter(
      (note) => note.id !== id
    );
    this.setState({ archivedNotes });
  }

  onAddNotesHandler({ title, body }) {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const formattedDate = new Date().toLocaleDateString("id-ID", options);
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: true,
            createAt: formattedDate,
          },
        ],
      };
    });
  }

  onBackNotesHandler(noteId) {
    const { notes, archivedNotes } = this.state;
    const noteToArchive = archivedNotes.find((note) => note.id === noteId);

    noteToArchive.archived = true;
    const updateArchivedNotes = archivedNotes.filter(
      (note) => note.id !== noteId
    );

    this.setState({
      notes: [...notes, noteToArchive],
      archivedNotes: updateArchivedNotes,
    });
  }

  onArsipHandler(noteId) {
    const { notes, archivedNotes } = this.state;
    const noteToArchive = notes.find((note) => note.id === noteId);

    noteToArchive.archived = false;
    const updatedNotes = notes.filter((note) => note.id !== noteId);

    this.setState({
      notes: updatedNotes,
      archivedNotes: [...archivedNotes, noteToArchive],
    });
  }

  
  

  onSearchChange(searchQuery) {
    this.setState({ searchQuery });
  }

  render() {
    const { notes, archivedNotes, searchQuery } = this.state;

    const filterNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filterArchivedNotes = archivedNotes.filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="notes-app">
        <Navbar onSearchChange={this.onSearchChange} />
        <FormInput addNote={this.onAddNotesHandler} />
        <NotesList
          title="Catatan Aktif"
          notes={filterNotes}
          onDelete={this.onDeleteNotesHandler}
          onArsip={this.onArsipHandler}
        />
        <NotesList
          title="Catatan Arsip"
          notes={filterArchivedNotes}
          onDelete={this.onDeleteArchivedNotesHandler}
          onArsip={this.onBackNotesHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
