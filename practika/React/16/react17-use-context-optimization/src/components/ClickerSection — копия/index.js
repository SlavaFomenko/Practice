import React, { Component } from 'react';
import CounterSetting1 from './CounterSetting1';
import CounterSetting2 from './CounterSetting2';
import CounterSetting3 from './CounterSetting3';

class ClickerSection extends Component {
  render() {
    return (
      <main>
        <h1>ClickerSection:</h1>
        <CounterSetting1 />
        {/* <CounterSetting2 /> */}
        {/* <CounterSetting3 /> */}
      </main>
    );
  }
}

export default ClickerSection;
