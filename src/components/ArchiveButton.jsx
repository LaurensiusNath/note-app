import React from "react";

function ArchiveButton({ id, onDelete, onMove }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>
      <button className="note-item__archive-button" onClick={() => onMove(id)}>
        Pindahkan
      </button>
    </div>
  );
}

export default ArchiveButton;
