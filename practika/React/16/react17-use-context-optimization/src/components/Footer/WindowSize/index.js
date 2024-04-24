import React, { Component } from 'react';

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }
  handlerWindowSize = (event) => {
    console.log('handlerWindowSize');
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }
  componentDidMount = () => {
    console.log('componentDidMount');
    window.addEventListener('resize', this.handlerWindowSize)
  }
  componentWillUnmount = () => {
    console.log('componentWillUnmount');
    window.removeEventListener('resize', this.handlerWindowSize)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  render() {
    const { width, height } = this.state;
    return (
      <div>
        <p>width:{width}</p>
        <p>height:{height}</p>
      </div>
    );
  }
}

export default WindowSize;
