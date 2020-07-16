import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavMenu } from './navigation/NavMenu';
import { AppRoutes } from './navigation/AppRoutes';
import { AppRoute } from './navigation/interfaces';
import { PortalParent } from './portal/PortalParent';
import { ProfilerApiOutput } from './profiler-api-output/ProfilerApiOutput';
import { StrictVsRegularMode } from './strict-vs-regular-mode/StrictVsRegularMode';

const routes: AppRoute[] = [
  { path: '/portal', name: 'Portal', Component: PortalParent },
  { path: '/profiler-api-output', name: 'Profiler API Output', Component: ProfilerApiOutput },
  { path: '/strict-vs-regular-mode', name: 'Strict vs Regular Mode', Component: StrictVsRegularMode },
];

export const App = () => (
  <BrowserRouter>
    <NavMenu routes={routes} />
    <AppRoutes routes={routes} />
  </BrowserRouter>
);
