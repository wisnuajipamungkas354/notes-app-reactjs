import React from "react";
import NoteItem from "./NoteItem";

function ListNotes({data, onDeleteHandler, onArchivedHandler}) {
  
  return (
    <div className="notes-list">
      {data.length > 0 ? data.map((item) => (
        <NoteItem key={item.id} {...item} onDeleteHandler={onDeleteHandler} onArchivedHandler={onArchivedHandler} />
      )) : (
        <span className="notes-list__empty-message">Tidak Ada Catatan</span>
      )} 
    </div>
  );
}

export default ListNotes;