import React, { useState,useEffect} from 'react';

function Fermemtation(props) {
  const [isActive, setIsActive] = useState(false)
  const [timerCounter, setTimerCounter] = useState(props.timerSettings)
  let timerInterval
  console.log(props);


  
  const autoClickStart = () => {
    if (!isActive) {
      setIsActive(true)
    }
    
    timerInterval = setInterval(() => {
      
      console.log(timerCounter);
      
      if (timerCounter > 0) {
        
        setTimerCounter(--timerInterval)
        
        console.log(props);
        props.counterChenge();
        
      } else {
        
        clearInterval(timerInterval)
        setIsActive(false)
        
      }
    }, 1000)
  }
  
  const autoClickStop = () => {
    clearInterval(timerInterval);
    setIsActive(false);
  }
  
  // useEffect(() => {
    
    //   const didMountInterval = setInterval(() => {
      //     props.counterChenge();
      //   }, 1000);
      
      //   setIsActive(true);
      
      
      //   return () => {
        //     clearInterval(didMountInterval);
        //   };
        // }, []);
        
        const btnType = props.btnType ? "Додати" : "Відняти"
        
        const hendlerButton = () => {
          console.log("hello");
          props.counterChenge()
        }
        
        return (
          <div>
      <h1>{props.value}</h1>
      <button onClick={hendlerButton}>{btnType}</button>
      {/* <button onClick={() => {
        if (!isActive) {
          autoClickStart()
        }
      }}>Start</button>
      <button onClick={autoClickStop}>Stop</button> */}
    </div>
  );
}


export default Fermemtation;
