export interface ProfilerOutput {
  id: string;
  phase: 'mount' | 'update';
  actualDuration: number;
  baseDuration: number;
  startTime: number;
  commitTime: number;
  interactions: Set<SchedulerInteraction>;
}

interface SchedulerInteraction {
  id: number;
  name: string;
  timestamp: number;
}
