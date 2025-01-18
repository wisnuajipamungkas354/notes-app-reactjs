import React, { act } from "react";
import CreateNote from "./CreateNote";
import ListNotes from "./ListNotes";

function Body({data, title, body, counter, search, onChangeInput,  onSubmitNewNote, onDeleteHandler, onArchivedHandler}) {
  let archivedNote = data.filter((item) => item.archived === true && item.title.toLowerCase().includes(search));
  let activeNote = data.filter((item) => item.archived === false && item.title.toLowerCase().includes(search));

  return (
    <div className="note-app__body">
      <CreateNote title={title} body={body} counter={counter} onChangeInput={onChangeInput} onSubmitNewNote={onSubmitNewNote} />
      <h2>Catatan Aktif</h2>
      <ListNotes data={activeNote} onDeleteHandler={onDeleteHandler} onArchivedHandler={onArchivedHandler}/>
      <h2>Arsip</h2>
      <ListNotes data={archivedNote} onDeleteHandler={onDeleteHandler} onArchivedHandler={onArchivedHandler} />
    </div>
  );
}

export default Body;