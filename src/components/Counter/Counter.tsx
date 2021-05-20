import React, { ReactElement } from 'react';

export interface OnCounterValueChanged {
  (currentValue: number): void;
}

export interface NextValue {
  (currentValue: number): number; // next value
}

export interface CounterProps {
  value: number;
  onCounterValueChanged: OnCounterValueChanged;
  increment?: NextValue;
  decrement?: NextValue;
}

export const incrementByOne: NextValue = (currentValue) => currentValue + 1;
export const decrementByOne: NextValue = (currentValue) => currentValue - 1;

export const Counter: React.FC<CounterProps> = ({ value, onCounterValueChanged, increment = incrementByOne, decrement = decrementByOne }): ReactElement => {

  function _increment(): void {
    onCounterValueChanged(increment(value));
  }

  function _decrement(): void {
    onCounterValueChanged(decrement(value));
  }

  return (
    <>
      <button onClick={_decrement}>-</button>
        <span>{value}</span>
      <button onClick={_increment}>+</button>
    </>
  );
}
