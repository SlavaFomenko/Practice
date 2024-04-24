import React, { Component } from 'react';
import styles from './dayofmonth.module.css'
import {isSunday, setDate } from 'date-fns';
import classNames from 'classnames';

class DayOfMonth extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const currentDate = new Date();
    const isSut= isSunday(setDate(currentDate,this.props.day))
    return (
      <div className={styles.day}>
          <span className={classNames({[styles.colorRed]:isSut})}>{this.props.day}</span>   
      </div>
    );
  }
}

export default DayOfMonth;
