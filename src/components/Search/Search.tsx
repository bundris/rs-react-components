import React from 'react';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input
          className="search__input"
          id="input"
          type="text"
          placeholder="Enter a query"
        />
        <button type="button" className="search__button">
          GO!
        </button>
      </div>
    );
  }
}

export default Search;
