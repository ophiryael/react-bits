import React from 'react';
import styled from 'styled-components';
import { ProfilerOutput as IProfilerOutput } from './interfaces';

interface Props {
  profilerOutput: IProfilerOutput;
}

const OutputContainer = styled('div')`
  white-space: pre;
`;

export const ProfilerOutput: React.FC<Props> = ({ profilerOutput }) => (
  <details open>
    <summary>Profiler output</summary>
    <OutputContainer>{JSON.stringify(profilerOutput, null, 4)}</OutputContainer>
  </details>
);
