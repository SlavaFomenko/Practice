import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step:this.props.step
    }
    console.log('constructor');
  }
  increment = () => {
    this.setState({
      count: this.state.count + this.props.step
    })
  }
  decrement = () =>{
    if(this.state.count > 0){
      this.setState({
        count: this.state.count - this.props.step
      })
    }
  }

  render() {
    console.log('render');
    return (
      <article>
        <h1>COUNTER</h1>
        <h2>COUNT: {this.state.count}</h2>
        <h2>STEP: {this.props.step}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>

        {/* <button>Шаг меньше на 1</button> */}
      </article>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

export default Counter;
