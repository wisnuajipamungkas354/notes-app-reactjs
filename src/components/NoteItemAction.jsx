import React from "react";

function NoteItemAction({id, isArchived, onDeleteHandler,onArchivedHandler}) {
  
  return (
    <div className="note-item__action" >
      <button className="note-item__delete-button" onClick={() => onDeleteHandler(id)}>Hapus</button>
      <button className="note-item__archive-button" onClick={() => onArchivedHandler(id)}>
        {isArchived ? 'Pindahkan' : 'Arsipkan'}
      </button>
    </div>
  );
}

export default NoteItemAction;