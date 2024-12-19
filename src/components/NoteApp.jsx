import React from "react";
import NoteList from "./NoteList";
import ArchiveList from "./ArchiveList.jsx";
import NoteInput from "./NoteInput.jsx";
import NoteSearch from "./NoteSearch.jsx";
import { getInitialData } from "../utils/index.js";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      search: "",
    };

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onMoveNoteHandler = this.onMoveNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveNoteHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: true };
      }
      return note;
    });
    this.setState({ notes });
  }

  onMoveNoteHandler(id) {
    const notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: false };
      }
      return note;
    });
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchHandler(event) {
    const searchedItem = event.target.value;
    this.setState(() => {
      return {
        search: searchedItem,
      };
    });
  }

  render() {
    const activeNotes = this.state.notes.filter(
      (note) =>
        !note.archived &&
        note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const archivedNotes = this.state.notes.filter(
      (note) =>
        note.archived &&
        note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1>Notes</h1>
        </div>
        <div className="note-app__body">
          <NoteSearch onSearch={this.onSearchHandler} />
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan aktif</h2>
          {activeNotes.length > 0 ? (
            <NoteList
              notes={activeNotes}
              onDelete={this.onDeleteNoteHandler}
              onArchive={this.onArchiveNoteHandler}
            />
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
          <h2>Arsip</h2>
          {archivedNotes.length > 0 ? (
            <ArchiveList
              notes={archivedNotes}
              onDelete={this.onDeleteNoteHandler}
              onMove={this.onMoveNoteHandler}
            />
          ) : (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
          )}
        </div>
      </div>
    );
  }
}

export default NoteApp;
