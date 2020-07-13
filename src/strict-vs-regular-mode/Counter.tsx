import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

const Container = styled('div')`
  padding: 15px;
  text-align: center;
  border: 1px solid #f8f9fa;

  & > *:not(:last-child) {
    margin-bottom: 25px;
  }
`;

export const Counter: React.FC<Props> = ({ title }) => {
  const [clickCount, setClickCount] = useState<number>(0);
  const renderCount = useRef<number>(0);

  renderCount.current++;
  return (
    <Container>
      <div>{title}</div>
      <button onClick={() => setClickCount(prevCount => prevCount + 1)}>Click</button>
      <div>Click count: {clickCount}</div>
      <div>Render count: {renderCount.current}</div>
    </Container>
  );
};
