import React, { ReactElement } from 'react';
import { Counter } from './Counter';

export function CounterScreen(): ReactElement {
  return <div>
    <h2>Counter</h2>
    <Counter initialValue={0} onCounterValueChanged={value => console.log(value)} />
  </div>;
}
