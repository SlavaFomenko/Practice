import React, { useState } from 'react';
import Fermemtation from './Fermentation';
import Patching from './Patching';

function Counter() {

  const [counter, setCounter] = useState(0)
  const [step, setStep] = useState(1)
  const [actionType, setActionType] = useState(true)
  const [timerSettings, setTimerSettings] = useState(0)

  const counterChenge = () => {
    // console.log("hello");
    if (actionType) {
      setCounter(counter + step)
    } else {
      setCounter(counter - step)
    }
  }

  const chengeAction = (value) => {
    setActionType(value)
  }

  const chengeStep = (step) => {
    setStep(step)
  }

  const chengeTimer = (value) => {
    setTimerSettings(value)
  }

    return (
      <div>
        <Fermemtation
          value={counter}
          counterChenge={counterChenge}
          btnType={actionType}
          timerSettings={timerSettings} />
        <Patching
          chengeStep={chengeStep}
          chengeAction={chengeAction}
          chengeTimer={chengeTimer} />
      </div>
    );
  }


export default Counter;
