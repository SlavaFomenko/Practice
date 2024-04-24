import React, { Component } from 'react';
import styles from './title.module.css'
import { format, getYear } from 'date-fns';

class Title extends Component {
  render() {
    const currentMonth = format(new Date(),'MMMM')
    const currentYear = getYear(new Date())
    return (
      <div className={styles.title}>
        <span>{currentMonth} <span className={styles.year}>{currentYear}</span></span>
      </div>
    );
  }
}

export default Title;
