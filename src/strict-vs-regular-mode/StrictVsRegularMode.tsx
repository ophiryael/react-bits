import React from 'react';
import styled from 'styled-components';
import { Counter } from './Counter';

const Container = styled('div')`
  margin: 25px 25px 0;

  & > div:first-child {
    margin-bottom: 25px;
  }
`;

export const StrictVsRegularMode: React.FC = () => (
  <Container>
    <React.StrictMode>
      <Counter title="Strict Mode" />
    </React.StrictMode>
    <Counter title="Regular Mode" />
  </Container>
);
