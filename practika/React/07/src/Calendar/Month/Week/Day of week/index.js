import React, { Component } from 'react';
import styles from './dayOfWeek.module.css'
import classNames from 'classnames';

class DayOfWeek extends Component {
  constructor(props){
    super(props)
  }
  render() {

    const isSunday = this.props.dayNumber === 1;

    return (
      <div className={classNames(styles.dayOfWeek,{[styles.red]:isSunday})}>
        <span>{this.props.dayName}</span>
      </div>
    );
  }
}

export default DayOfWeek;
