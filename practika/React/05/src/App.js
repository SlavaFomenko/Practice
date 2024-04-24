import React from 'react';
import './App.css';
// import Counter from './components/Counter';
// import Footer from './components/Footer';
import StopWatch from './components/StopWatch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      step: 1
    }
  }
  setVisible = () => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  addStep = () => {
    this.setState({
      step: this.state.step + 1
    });
  }
  render() {
    return (
        <StopWatch />
    );
  }
}

export default App;
