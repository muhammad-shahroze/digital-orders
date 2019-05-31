import React from 'react';
import './NavBar.css';

function SearchBox() {
  return (
    <form className="search-box form-inline md-form form-sm active-pink active-pink-2 mt-2">
      <i className="fas fa-search" aria-hidden="true"></i>
      <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search"></input>
    </form>
  )
}

export default SearchBox;