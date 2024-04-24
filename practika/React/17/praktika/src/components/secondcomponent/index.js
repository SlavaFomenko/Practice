import React from 'react';
import { useWindowClickCounter } from '../../hooks/windowClickCounter';

export function SecondComponent () {
  const count = useWindowClickCounter();

    return (
      <div>
        <input itemType='number' value={count}/>
      </div>
    )
}

