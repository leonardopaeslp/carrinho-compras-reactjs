import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './SearchBar.css';

function SearchBar(){

  const [searchValue, setSearchValue] = useState('');

  return(
    <form className="search-bar">
      <input 
        type="search"
        placeholder="Buscar produtos"
        className="search_input"
        value={searchValue}
        onChange={({target}) => setSearchValue(target.value)}
        required />
      <button type="submit" className="search_button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
