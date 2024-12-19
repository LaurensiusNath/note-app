import React from "react";

function NoteSearch({ onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari catatan"
        onChange={onSearch}
        className="note-search__input"
      />
    </div>
  );
}

export default NoteSearch;
