import React, { Component } from 'react';
import WindowSize from './WindowSize';
import User from './User';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    }
  }
  changeVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {
    const { isVisible } = this.state;
    return (
      <footer>
        <h2>THIS IS FOOTER</h2>
        <button onClick={this.changeVisible}>visible</button>
        {isVisible && <WindowSize />}
        <User />
      </footer>
    );
  }
}

export default Footer;
