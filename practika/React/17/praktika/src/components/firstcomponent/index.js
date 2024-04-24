import React from 'react';
import { useWindowClickCounter } from '../../hooks/windowClickCounter';

export function FirstComponent () {
  const count = useWindowClickCounter();
    return (
      <div>
        <h1>{count}</h1>
      </div>
    )
}

