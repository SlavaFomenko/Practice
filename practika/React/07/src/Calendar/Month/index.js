import React, { Component } from 'react';
import styles from './month.module.css'
import Week from './Week';
import DaysOfMonth from './Days of month/daysOfMonth'

class Month extends Component {
  render() {
    return (
      <div className={styles.month}>
        <Week/>
        <DaysOfMonth/>
      </div>
    );
  }
}

export default Month;
