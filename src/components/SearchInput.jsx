import React from "react";

function SearchInput({ search, onSearchHandler }) {
  
  return (
    <input name="search" className="notes-app-header__input" value={search} placeholder="Cari catatan..." onChange={onSearchHandler}/>
  );
}

export default SearchInput;