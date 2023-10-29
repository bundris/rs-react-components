import React, { Component } from 'react';
import Search from '../Search/Search';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Search />
      </header>
    );
  }
}

export default Header;
