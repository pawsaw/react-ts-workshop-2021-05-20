import React, { ReactElement, useState } from 'react';

export interface OnCounterValueChanged {
  (currentValue: number): void;
}

export interface NextValue {
  (currentValue: number): number; // next value
}

export interface CounterProps {
  initialValue: number;
  onCounterValueChanged: OnCounterValueChanged;
  increment?: NextValue;
  decrement?: NextValue;
}

export const incrementByOne: NextValue = (currentValue) => currentValue + 1;
export const decrementByOne: NextValue = (currentValue) => currentValue - 1;

export const Counter: React.FC<CounterProps> = ({ initialValue, onCounterValueChanged, increment = incrementByOne, decrement = decrementByOne }): ReactElement => {

  const [value, setValue] = useState(initialValue);

  function _increment(): void {
    const _value = increment(value);
    setValue(_value)
    onCounterValueChanged(_value);
  }

  function _decrement(): void {
    const _value = decrement(value);
    setValue(_value)
    onCounterValueChanged(_value);
  }

  return (
    <>
      <button onClick={_decrement}>-</button>
        <span>{value}</span>
      <button onClick={_increment}>+</button>
    </>
  );
}
