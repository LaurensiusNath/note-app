import React from "react";
import NoteButton from "./NoteButton";
import { showFormattedDate } from "../utils";

function NoteItem({ id, title, createdAt, body, onDelete, onArchive }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <NoteButton id={id} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default NoteItem;
