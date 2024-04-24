import React, { Component } from 'react';

class Patching extends Component {
  constructor(props) {
    super(props)

    this.state = {
      step: 1,
      actionType: true,
      timer: 0,
    }
  }

  inputHandler = (e) => {
    const value = +e.target.value
    this.setState({
      step: value
    }, () => {
      this.props.chengeStep(value)
    })
  }

  chengeActionType = (e) => {
    const value = e.target.value === "false" ? false : true
    this.setState({
      actionType: e.target.value
    }, () => {
      this.props.chengeAction(value)
    })
  }
  
  timerSettingsInput = (e) => {
    const value = +e.target.value
    this.setState({
      timer:value
    },()=>{
      this.props.chengeTimer(value)
    })
  }


  render() {
    return (
      <div>
        <input value={this.state.step} onChange={this.inputHandler} />
        <h3>step = {this.state.step}</h3>
        <select onChange={this.chengeActionType}>
          <option value={true}>+</option>
          <option value={false}>-</option>
        </select>
        <input type='number'
          value={this.state.timer}
          onChange={this.timerSettingsInput} />
      </div>
    );
  }
}

export default Patching;
