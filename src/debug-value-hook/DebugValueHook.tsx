import React from 'react';
import styled from 'styled-components';
import { Spinner } from '../common/Spinner';
import { useDelayedMessage } from './useDelayedMessage';

const Container = styled('div')`
  margin: 25px;
`;

export const DebugValueHook: React.FC = () => {
  const message = useDelayedMessage();
  return <Container>Message: {message ?? <Spinner />}</Container>;
};
