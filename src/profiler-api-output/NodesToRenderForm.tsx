import React, { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  setNumOfNodesToRender: (numOfNodesToRender: number | null) => void;
}

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

export const NodesToRenderForm: React.FC<Props> = ({ setNumOfNodesToRender }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setNumOfNodesToRender(inputRef.current ? +inputRef.current.value : null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="nodes-count-input">Number of nodes to render:</label>
      <input ref={inputRef} id="nodes-count-input" type="number" min={1} />
      <button type="submit">Render</button>
    </Form>
  );
};
