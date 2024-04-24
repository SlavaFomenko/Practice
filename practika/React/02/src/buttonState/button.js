import React, { Component } from "react";
import './button.css'
class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      styles : 'custom-button',
    };
  }

  handleClick = () => {
    if(this.state.clicked){
      this.setState({ clicked: false ,styles:'custom-button' })
    } else {
      this.setState({ clicked: true , styles:'custom-button-active' })
    }
  }

  render() {
    return (
      <button className={this.state.styles}
      onClick={this.handleClick}>
        {(this.state.clicked).toString()}
        </button>
    );
  }
}

export default Button;
