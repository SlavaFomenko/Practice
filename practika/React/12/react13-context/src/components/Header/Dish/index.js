import React, { Component} from 'react';
import { ThemeContext } from '../../../context';
import styles from './theme.module.css'

class Dish extends Component {



  render() {
    const { name } = this.props;

    const theme = this.context.theme ? styles.theme_white : styles.theme_black; 
    return (
      <div className={theme}>
        Dish: {name}
      </div>
    );
  }
}
Dish.contextType = ThemeContext;

export default Dish;
