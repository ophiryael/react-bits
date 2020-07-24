import React, { useState } from 'react';
import styled from 'styled-components';
import { useVariedEffect } from './useVariedEffect';

interface Props {
  title: string;
  effectType: 'regular' | 'layout';
}

const Container = styled('div')`
  padding: 20px;
  border: 1px solid #fff;
  text-align: center;

  & > div {
    margin-bottom: 10px;
  }
`;

const Title = styled('div')`
  text-decoration: underline;
`;

const INITIAL_TEXT = 'This is a very very long initial text';

function busyWait(ms: number) {
  const endTime = Date.now() + ms;
  while (Date.now() < endTime) {}
}

export const EffectHookDemo: React.FC<Props> = ({ title, effectType }) => {
  const [text, setText] = useState(INITIAL_TEXT);

  useVariedEffect(effectType, () => {
    if (text === INITIAL_TEXT) {
      busyWait(150);
      setText('Updated text');
    }
  });

  return (
    <Container>
      <Title>{title}</Title>
      <div>{text}</div>
      <button onClick={() => setText(INITIAL_TEXT)}>Reset</button>
    </Container>
  );
};
