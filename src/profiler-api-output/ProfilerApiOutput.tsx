import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfilerOutput } from './ProfilerOutput';
import { NodesToRenderForm } from './NodesToRenderForm';
import { ProfiledNodesRenderer } from './ProfiledNodesRenderer';
import { ProfilerOutput as IProfilerOutput } from './interfaces';

const Container = styled('div')`
  margin: 25px;

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const ProfilerApiOutput: React.FC = () => {
  const [numOfNodesToRender, setNumOfNodesToRender] = useState<number | null>(null);
  const [profilerOutput, setProfilerOutput] = useState<IProfilerOutput | null>(null);

  return (
    <Container>
      <NodesToRenderForm setNumOfNodesToRender={setNumOfNodesToRender} />
      {profilerOutput && <ProfilerOutput profilerOutput={profilerOutput} />}
      <ProfiledNodesRenderer numOfNodesToRender={numOfNodesToRender} setProfilerOutput={setProfilerOutput} />
    </Container>
  );
};
