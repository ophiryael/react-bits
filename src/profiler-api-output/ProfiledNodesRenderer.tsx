import React, { Profiler, ProfilerOnRenderCallback } from 'react';
import { ProfilerOutput } from './interfaces';

interface Props {
  numOfNodesToRender: number | null;
  setProfilerOutput: (profilerOutput: ProfilerOutput) => void;
}

const orderedProfilerParamNames = [
  'id',
  'phase',
  'actualDuration',
  'baseDuration',
  'startTime',
  'commitTime',
  'interactions',
];

export const ProfiledNodesRenderer: React.FC<Props> = React.memo(({ numOfNodesToRender, setProfilerOutput }) => {
  const handleProfilerEvent: ProfilerOnRenderCallback = (...args) => {
    const profilerOutput = orderedProfilerParamNames.reduce(
      (output, paramName, i) => ({ ...output, [paramName]: args[i] }),
      {} as ProfilerOutput
    );
    setProfilerOutput(profilerOutput);
  };

  return (
    <Profiler id="NodesRenderer" onRender={handleProfilerEvent}>
      <details>
        <summary>Nodes</summary>
        {numOfNodesToRender && Array.from(Array(numOfNodesToRender), (_, i) => <div key={i}>Node #{i}</div>)}
      </details>
    </Profiler>
  );
});
