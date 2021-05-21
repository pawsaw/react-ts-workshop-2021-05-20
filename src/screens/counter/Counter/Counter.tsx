import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeCounterValue, State } from '../../../redux';

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

const Counter: React.FC<CounterProps> = ({ value, onCounterValueChanged, increment = incrementByOne, decrement = decrementByOne }): ReactElement => {


  function _increment(): void {
    const _value = increment(value);
    onCounterValueChanged(_value);
  }

  function _decrement(): void {
    const _value = decrement(value);
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

function mapStateToProps(state: State) {
  return {
    value: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onCounterValueChanged: (currentValue: number) => dispatch(changeCounterValue(currentValue))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
