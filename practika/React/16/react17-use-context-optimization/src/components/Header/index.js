import React, { Component } from 'react';
import Menu from './Menu';

class Header extends Component {
  render() {
    return (
      <header>
        <h2>THIS IS HEADER</h2>
        <Menu />
      </header>
    );
  }
}

export default Header;
