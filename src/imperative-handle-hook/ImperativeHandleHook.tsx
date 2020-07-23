import React, { useRef } from 'react';
import styled from 'styled-components';
import { Input } from './Input';

const Container = styled('div')`
  margin: 25px;
`;

interface CustomRef {
  customFocus: () => void;
}

export const ImperativeHandleHook: React.FC = () => {
  const ref = useRef<CustomRef | null>(null);

  const handleFocus = () => {
    ref.current?.customFocus();
  };

  return (
    <Container>
      <Input ref={ref} />
      <button onClick={handleFocus}>Focus</button>
    </Container>
  );
};
