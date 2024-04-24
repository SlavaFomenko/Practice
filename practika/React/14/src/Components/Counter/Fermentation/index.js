import React, { useState, useEffect } from 'react';

function Fermemtation(props) {
  const [isActive, setIsActive] = useState(false)
  const [timerSettings, setTimerSettings] = useState(props.timerSettings)
  const [didMountIntervalIsActive, setDidMountIntervalIsActive] = useState(true)
  // const [timerCount,setTimerCount] = useState()
  // let timerInterval
  // let didMountIntervalIsActive = true
  // console.log(props);
  // console.log(props);
  // console.log(timerSettings);


  const autoClickStart = () => {
    if (!didMountIntervalIsActive) {
      if (!isActive) {
        setIsActive(true)
      }
    }
  }

  const autoClickStop = () => {
    // clearInterval(timerInterval);
    setIsActive(false);
    setDidMountIntervalIsActive(false)
  }

  useEffect(() => {
    // console.log(isActive);
    setTimerSettings(props.timerSettings)
    let didMountInterval = null
    let timerInterval = null
    if (didMountIntervalIsActive) {
      // console.log(isActive + " is active");
      // console.log(didMountIntervalIsActive +" didMountIntervalIsActive");
      // console.log('interval did mount');
      didMountInterval = setInterval(() => {
        props.counterChenge();
      }, 1000);
    }
    if (isActive) {
      // console.log('interval did mount');
      timerInterval = setInterval(() => {

        // console.log(timerCounter);

        if (timerSettings > 0) {
          props.counterChenge();
        } else {
          setIsActive(false)
        }
      }, 1000)
    }
    // clearInterval(timerInterval)
    // setIsActive(false)


    return () => {
      if (didMountIntervalIsActive === true) {
        // console.log('clear did mount');
        clearInterval(didMountInterval);
      }

      if (isActive)
        clearInterval(timerInterval)
    };
  });

  const btnType = props.btnType ? "Додати" : "Відняти"

  const hendlerButton = () => {
    console.log("hello");
    props.counterChenge()
  }

  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={hendlerButton}>{btnType}</button>
      <button onClick={() => {
        if (!isActive) {
          autoClickStart()
        }
      }}>Start</button>
      <button onClick={autoClickStop}>Stop</button>
    </div>
  );
}


export default Fermemtation;
