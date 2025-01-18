import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({id, title, body, archived, createdAt, onDeleteHandler, onArchivedHandler}) {
  
  return (
    <div className="note-item" >
      <NoteItemContent title={title} body={body} createdAt={createdAt}/>
      <NoteItemAction id={id} isArchived={archived} onDeleteHandler={onDeleteHandler} onArchivedHandler={onArchivedHandler} />
    </div>
  );
}

export default NoteItem;