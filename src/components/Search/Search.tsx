import React from 'react';
import './Search.css';
import { SearchProps } from '../../utils/types';
import { Pagination } from '../Pagination/Pagination';

function Search({ query, updateData }: SearchProps) {
  return (
    <div className="search-wrapper">
      <div className="search">
        <input
          className="search__input"
          id="input"
          type="text"
          placeholder="Enter a query"
          defaultValue={query}
        />
        <button type="button" className="search__button" onClick={updateData}>
          GO!
        </button>
      </div>
      <Pagination />
    </div>
  );
}

export default Search;
