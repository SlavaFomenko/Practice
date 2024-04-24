import React from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Counter from './components/Counter';
import Footer from './components/Footer';

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
  decrementStep = () => {
    this.setState({
      step:this.state.step - 1
    })
  }
  render() {
    return (
      <div>
        {/* <User firstName="Petr" age={18}/>
        <User firstName="Ivan" age={33}/> */}

        <button onClick={this.setVisible}>on/off</button>
        <button onClick={this.addStep}>add step</button>
        <button onClick={this.decrementStep}>Шаг меньше на 1</button>
        {this.state.isVisible && <Counter step={this.state.step} />}
        <Footer />
      </div>
    );
  }
}

export default App;
