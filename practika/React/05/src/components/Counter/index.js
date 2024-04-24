import React, { Component } from 'react';
// import './Counter.css';
import styles from './Counter.module.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    console.log('constructor');
  }
  start = () => {
    this.idInterval = setInterval(() => {
      // console.log('tick');
      this.setState({
        count: this.state.count + this.props.step
      })
    }, 1000);
  }
  stop = () => {
    clearInterval(this.idInterval);
  }
  render() {
    console.log('render');
    return (
      <article>
        <h1>COUNTER</h1>
        <h2>COUNT: {this.state.count}</h2>
        <h2>STEP: {this.props.step}</h2>
        {/* <button className='btn' onClick={this.start}>start</button>
        <button className='btn' onClick={this.stop}>stop</button> */}
        <button className={styles.btn} onClick={this.start}>start</button>
        <button className={styles.btn} onClick={this.stop}>stop</button>

      </article>
    );
  }
  // componentDidMount() {
  //   this.start();
  //   console.log('componentDidMount');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }
  // componentWillUnmount() {
  //   this.stop();
  //   console.log('componentWillUnmount');
  // }
}

export default Counter;
