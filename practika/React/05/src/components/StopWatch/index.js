import React, { Component } from 'react';
// import './StopWatch.css';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
      isStarted: false
    }
  }
  updateTime = () => {
    this.idTimeout = setTimeout(() => {
      this.setState({
        time: new Date(this.state.time.getTime() + 1),
      })
    }, 1);
  }
  start = () => {
    this.setState({
      isStarted: true
    })
  }
  formatTime(date) {

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
  
    return `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
  }

  stop = () => {
    console.log('stop');
    clearTimeout(this.idTimeout);
    this.setState({
      isStarted: false
    })
  }
  reset = () => {
    this.stop();
    // console.log('stop');
    this.setState({
      time: new Date(0, 0, 0, 0, 0, 0),
    })
  }
  render() {
    const { time } = this.state;
    const stopWatchStyle = `${this.state.isStarted ? styles.isStarted : styles.default}`
    return (
      <article className={styles.wrapper}>
        <div className={styles.timer}>
          <h3>{this.formatTime(time)}</h3>
        </div>
        <div  className={styles.buttons}>
          <button className={stopWatchStyle} onClick={this.start} disabled={this.state.isStarted}>Start</button>
          <button className={styles.stop} onClick={this.stop}>Stop</button>
          <button className={styles.reset} onClick={this.reset}>Reset</button>
        </div>
      </article>
    );
  }

  componentDidUpdate = () => {
    if (this.state.isStarted === true) {
      this.updateTime()
    }
  }
}

export default StopWatch;
