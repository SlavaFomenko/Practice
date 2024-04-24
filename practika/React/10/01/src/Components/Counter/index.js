import React, { Component } from 'react';
import Fermemtation from './Fermentation';
import Patching from './Patching';

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      step: 1,
      actionType: true,
      timerSettings: 0,
    }
  }

  counterChenge = () => {
    if (this.state.actionType) {
      this.setState({
        counter: this.state.counter + this.state.step,
      })
    } else {
      this.setState({
        counter: this.state.counter - this.state.step,
      })
    }
  }

  chengeAction = (value) => {
    this.setState({
      actionType: value
    })
  }

  chengeStep = (step) => {
    this.setState({
      step: step,
    })
  }
  chengeTimer = (value) => {
    this.setState({
      timerSettings:value
    })
  }

  render() {
    const { counter } = this.props
    return (
      <div>
        <Fermemtation
          value={this.state.counter}
          counterChenge={this.counterChenge}
          btnType={this.state.actionType}
          timerSettings={this.state.timerSettings} />
        <Patching
          chengeStep={this.chengeStep}
          chengeAction={this.chengeAction}
          chengeTimer={this.chengeTimer} />
      </div>
    );
  }
}

export default Counter;
