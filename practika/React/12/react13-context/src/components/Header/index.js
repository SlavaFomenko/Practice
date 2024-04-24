import React, { Component } from 'react';
import Menu from './Menu';
import { ThemeContext } from '../../context/index';

class Header extends Component {
  handleChangeContext = () => {
    this.contextValueUpdater(!this.context);
  };

  render() {
    console.log(this.context);
    return (
      <header>
        <h2>THIS IS HEADER</h2>

        <button onClick={this.context.chengeValue}>Изменить тему</button>
        <Menu />
      </header>
    );
  }
}
Header.contextType = ThemeContext;

export default Header;
