import React from "react";

function FormBuatCatatan({ title, body, counter, onChangeInput, onSubmit }) {
  
  return (
    <form onSubmit={onSubmit}>
      <p className="note-input__title__char-limit">Sisa Karakter : {counter}</p>
      <input name="title" className="note-input__title" type="text" placeholder="Masukkan Judul" value={title} onChange={onChangeInput} required/>
      <textarea name="body" className="note-input__body" type="text" placeholder="Tuliskan catatanmu di sini ..."  value={body} onChange={onChangeInput} required />
      <button type="submit">Buat</button>
    </form>
  );
}

export default FormBuatCatatan;