import React from "react";
import ArchiveItem from "./ArchiveItem";

function ArchiveList({ notes, onDelete, onMove }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <ArchiveItem
          key={note.id}
          id={note.id}
          onDelete={onDelete}
          onMove={onMove}
          {...note}
        />
      ))}
    </div>
  );
}

export default ArchiveList;
