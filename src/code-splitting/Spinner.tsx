import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled('div')`
  display: inline-block;
  height: 10px;
  width: 10px;
  border: 2px solid #6e7078;
  border-top-color: #fff;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;
