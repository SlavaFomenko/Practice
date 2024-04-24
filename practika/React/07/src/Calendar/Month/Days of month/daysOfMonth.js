import React, { Component } from 'react';
import styles from './daysOfMonth.module.css'
import DayOfMonth from './Day of month/dayOfMonth';
import { getDay, getDaysInMonth, startOfMonth,} from 'date-fns';

class DaysOfMonth extends Component {

  render() {
    const daysComponents = []
    const quantityDays = getDaysInMonth(new Date());
    const currentDate = new Date();
    const firstDayOfMonth = startOfMonth(currentDate);
    const dayOfWeek = getDay(firstDayOfMonth);
    console.log(dayOfWeek);

    for(let i = 0;i < dayOfWeek;i++){
      daysComponents.push(
        <p></p>
      )
    }

    for (let i = 1; i <= quantityDays; i++) {
      daysComponents.push(
        <DayOfMonth key={i} day={i}/>
      )
    }
    return (
      <div className={styles.daysWrapper}>
        {daysComponents}
      </div>
    );
  }
}

export default DaysOfMonth;
