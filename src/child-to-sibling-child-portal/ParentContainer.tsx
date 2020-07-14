import React, { useState } from 'react';
import styled from 'styled-components';
import { PortalChild } from './PortalChild';

const Container = styled('div')`
  margin-top: 25px;
  text-align: center;

  & > button {
    padding: 5px 10px;
    margin-bottom: 25px;
  }
`;

export const ParentContainer: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);
  const [regularChildEl, setRegularChildEl] = useState<HTMLDivElement | null>(null);

  return (
    <Container>
      <button onClick={() => setClickCount(prevCount => prevCount + 1)}>CLICK</button>
      <div ref={el => setRegularChildEl(el)}>Regular child</div>
      <PortalChild clickCount={clickCount} regularChildEl={regularChildEl} />
    </Container>
  );
};
