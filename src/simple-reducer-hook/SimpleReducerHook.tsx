import React, { useReducer } from 'react';
import styled from 'styled-components';

const Container = styled('div')`
  margin: 25px;

  & > div {
    margin-bottom: 20px;
  }

  & > button {
    padding: 5px 10px;
  }
`;

type CounterState = { count: number };
type CounterAction = { type: 'INCREASE' | 'DECREASE' | 'RESET' };

const initialCounter = { count: 0 };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREASE':
      return { count: state.count + 1 };
    case 'DECREASE':
      return { count: state.count - 1 };
    case 'RESET':
      return initialCounter;
    default:
      return state;
  }
}

export const SimpleReducerHook: React.FC = () => {
  const [counterState, counterDispatch] = useReducer(counterReducer, initialCounter);

  return (
    <Container>
      <div>Count: {counterState.count}</div>
      <button onClick={() => counterDispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => counterDispatch({ type: 'DECREASE' })}>-1</button>
      <button onClick={() => counterDispatch({ type: 'RESET' })}>Reset</button>
    </Container>
  );
};
