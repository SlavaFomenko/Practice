import React, {useState } from 'react';
import CounterDisplay1 from '../CounterDisplay1';

function CounterSetting1() {

  const [step, setStep] = useState(0)

  const handlerInput = ({ target: { value } }) => {
    setStep(Number(value))
  }
  console.log('render Parent(CounterSetting)');
  return (
    <section>
      <h2>Setting:</h2>
      <input
        type="range"
        onChange={handlerInput}
        value={step}
        min="1"
        max="10"
        step="1"
      />
      <h2>step:{step}</h2>
      <CounterDisplay1 step={step} />
    </section>
  );
}
export default CounterSetting1
