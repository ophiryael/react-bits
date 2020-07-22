import React, { useState, Suspense } from 'react';
import styled from 'styled-components';
import { Spinner } from '../common/Spinner';
import { ErrorBoundary } from './ErrorBoundary';

const Container = styled('div')`
  margin: 25px;

  & > button {
    margin-bottom: 15px;
  }
`;

// Added delay for spinner animation
const GeneralKenobi = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./GeneralKenobi') as any), 750);
  });
});

export const HelloThere: React.FC = () => {
  const [isResponseVisible, setIsResponseVisible] = useState<boolean>(false);

  return (
    <Container>
      <button onClick={() => setIsResponseVisible(prevIsVisible => !prevIsVisible)}>
        {isResponseVisible ? 'Hide response' : 'Show response'}
      </button>
      <div>
        Hello there...
        {isResponseVisible && (
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <GeneralKenobi />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </Container>
  );
};
