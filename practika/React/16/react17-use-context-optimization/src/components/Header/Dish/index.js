import React, { Component, useContext } from 'react';
import { ThemeContext } from '../../../context';

function Dish(props) {
  const theme = useContext(ThemeContext);
  const { name } = props;
  return (
    <div>
      Dish: {name}, Theme: {theme}
    </div>
  );
}

export default Dish;
