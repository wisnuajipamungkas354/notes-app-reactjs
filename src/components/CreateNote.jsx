import React from "react";
import FormBuatCatatan from "./FormBuatCatatan";

function CreateNote({ title, body, counter, onChangeInput, onSubmitNewNote }) {
  
  return (
    <div className="note-input">
      <h2>Buat Catatan</h2>
      <FormBuatCatatan title={title} body={body} counter={counter} onChangeInput={onChangeInput} onSubmit={onSubmitNewNote} />
    </div>
  );
}

export default CreateNote;