import React, { ReactElement } from 'react';
import Counter from './Counter/Counter';

export function CounterScreen(): ReactElement {
  return <div>
    <h2>Counter</h2>
    <Counter />
  </div>;
}
