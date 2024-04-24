import React, { useState } from 'react';

let globalCount = null;

function arePropsEqual(prevProps, nextProps) {
  globalCount = nextProps.step
  return prevProps.step !== nextProps.step;
}

const CounterDisplay1 = React.memo(({ step }) => {
  console.log("childern - " + globalCount);
  const [count, setCount] = useState(step)

  const increment = () => {
    console.log('increment' + globalCount);
    setCount( count + globalCount)
  }
  const decrement = () => {
    setCount(count - globalCount)
  }

  return (
    <article>
      <h2>Display:</h2>
      <h2>count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </article>
  );
},arePropsEqual)

export default CounterDisplay1;
