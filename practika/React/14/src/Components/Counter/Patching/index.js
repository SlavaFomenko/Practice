import React, { useState } from 'react';

function Patching(props) {
  const [step, setStep] = useState(1)
  const [actionType, setActionType] = useState(true)
  const [timer, setTimer] = useState(0)

  const inputHandler = (e) => {
    const value = +e.target.value
    setStep(value)
    props.chengeStep(value)
  }

  const chengeActionType = (e) => {
    const value = e.target.value === "false" ? false : true
    setActionType(e.target.value)
    props.chengeAction(value)
  }

  const timerSettingsInput = (e) => {
    const value = +e.target.value
    setTimer(value)
    props.chengeTimer(value)
  }

  return (
    <div>
      <input value={step} onChange={inputHandler} />
      <h3>step = {step}</h3>
      <select onChange={chengeActionType}>
        <option value={true}>+</option>
        <option value={false}>-</option>
      </select>
      <input type='number'
        value={timer}
        onChange={timerSettingsInput} />
    </div>
  );
}


export default Patching;
