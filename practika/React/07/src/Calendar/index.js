import React, { Component } from 'react';
import styles from './calendar.module.css'
import Title from './Title';
import Month from './Month';
import { getYear } from 'date-fns';


class Calendar extends Component {
  render() {
    return (
      <section className={styles.calendarWrapper}>
        <div className={styles.calendar}>
          <Title/>
          <Month/>
        </div>
      </section>
    );
  }
}

export default Calendar;
