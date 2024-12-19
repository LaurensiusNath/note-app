import React from "react";
import { showFormattedDate } from "../utils";
import ArchiveButton from "./ArchiveButton";

function ArchiveItem({ id, title, createdAt, body, onDelete, onMove }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <ArchiveButton id={id} onDelete={onDelete} onMove={onMove} />
    </div>
  );
}

export default ArchiveItem;
