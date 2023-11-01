import React from 'react';
import './Search.css';
import { SearchProps, SearchState } from '../../utils/types';

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const lsValue = localStorage.getItem('search_request') ?? '';
    this.state = {
      value: lsValue,
    };
  }

  render() {
    const { value } = this.state;
    const { updateData } = this.props;
    return (
      <div className="search">
        <input
          className="search__input"
          id="input"
          type="text"
          placeholder="Enter a query"
          defaultValue={value}
        />
        <button type="button" className="search__button" onClick={updateData}>
          GO!
        </button>
      </div>
    );
  }
}

export default Search;
