import React from "react";
import SearchInput from "./SearchInput";

function Header({ search, onSearchHandler }) {
  
  return (
    <header className="note-app__header">
      <h1>Notes App</h1>
      <SearchInput search={search} onSearchHandler={onSearchHandler} />
    </header>
  );
}

export default Header;