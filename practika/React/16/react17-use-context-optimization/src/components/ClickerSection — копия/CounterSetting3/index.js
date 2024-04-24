import React, { Component, PureComponent, useState } from 'react';
import CounterDisplay3 from '../CounterDisplay2';

function CounterSetting3() {
  console.log('render Parent(CounterSetting)');
  const [sign, setSign] = useState(null);
  return (
    <section>
      <h2>Setting:</h2>
      <button onClick={() => setSign(true)}>true</button>
      <button onClick={() => setSign(false)}>false</button>
      <CounterDisplay3 sign={sign} />
    </section>
  );

}

export default CounterSetting3;
