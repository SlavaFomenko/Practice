import React, { Component } from 'react';
import Dish from '../Dish';

class Menu extends Component {
  render() {
    return (
      <div>
        <h2>MENU:</h2>
        <Dish name="Pizza" />
        <Dish name="Burger" />
      </div>
    );
  }
}

export default Menu;
