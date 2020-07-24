import React from 'react';
import styled from 'styled-components';
import { EffectHookDemo } from './EffectHookDemo';

const Container = styled('div')`
  margin: 25px;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const LayoutVsRegularEffect = () => (
  <Container>
    <EffectHookDemo title="useEffect" effectType="regular" />
    <EffectHookDemo title="useLayoutEffect" effectType="layout" />
  </Container>
);
