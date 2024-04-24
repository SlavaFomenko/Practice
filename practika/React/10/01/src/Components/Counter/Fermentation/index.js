import React, { Component } from 'react';

class Fermemtation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  hendlerButton = () => {
    this.props.counterChenge()
  }


  autoClickStart = () => {
    if (!this.state.isActive) {      
      this.setState({
        isActive:true
      })
    }

    let timerCounter = this.props.timerSettings
    this.timerInterval = setInterval(() => {
      console.log(timerCounter);
      if(timerCounter > 0){
        timerCounter--
        this.props.counterChenge();
      } else {
        clearInterval(this.timerInterval)
        this.setState({
          isActive:false
        })
      }
    }, 1000)
  }

  autoClickStop = () => {
    const currentInterval = this.timerInterval || this.didMountInterval
    clearInterval(currentInterval)
    this.setState({
      isActive:false
    })
  }
  componentDidMount = () =>{
    this.didMountInterval = setInterval(() => {
      this.props.counterChenge();
    }, 1000)
    this.setState({
      isActive:true
    })
  }
  render() {
    const btnType = this.props.btnType ? "Додати" : "Відняти"

    return (
      <div>
        <h1>{this.props.value}</h1>
        <button onClick={this.hendlerButton}>{btnType}</button>
        <button onClick={() => {
          if(!this.state.isActive){
            this.autoClickStart()
          }
        }}>Start</button>
        <button onClick={this.autoClickStop}>Stop</button>
      </div>
    );
  }
}

export default Fermemtation;
