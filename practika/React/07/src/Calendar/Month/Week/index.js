import React, { Component } from 'react';
import styles from './week.module.css'
import DayOfWeek from './Day of week';


class Week extends Component {


  render() {
    const weekDays = ["S", "M", "T", "W", "T", "F", "S"]
    const daysOfWeekComponent = [];

    weekDays.forEach((e, index) => {
      daysOfWeekComponent.push(
        <DayOfWeek key={index} dayNumber={++index} dayName={e} />
      )
    })
    return (
      <div className={styles.week}>
        {daysOfWeekComponent}
      </div>
    );
  }
}

export default Week;
