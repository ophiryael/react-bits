import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavMenu } from './navigation/NavMenu';
import { AppRoutes } from './navigation/AppRoutes';
import { AppRoute } from './navigation/interfaces';
import { PortalParent } from './portal/PortalParent';
import { HelloThere } from './code-splitting/HelloThere';
import { DebugValueHook } from './debug-value-hook/DebugValueHook';
import { SimpleReducerHook } from './simple-reducer-hook/SimpleReducerHook';
import { ProfilerApiOutput } from './profiler-api-output/ProfilerApiOutput';
import { StrictVsRegularMode } from './strict-vs-regular-mode/StrictVsRegularMode';
import { ImperativeHandleHook } from './imperative-handle-hook/ImperativeHandleHook';
import { LayoutVsRegularEffect } from './layout-vs-regular-effect/LayoutVsRegularEffect';

const routes: AppRoute[] = [
  { path: '/portal', name: 'Portal', Component: PortalParent },
  { path: '/code-splitting', name: 'Code Splitting', Component: HelloThere },
  { path: '/use-debug-value', name: 'Use Debug Value', Component: DebugValueHook },
  { path: '/profiler-api-output', name: 'Profiler API Output', Component: ProfilerApiOutput },
  { path: '/simple-reducer-hook', name: 'Simple Reducer Hook', Component: SimpleReducerHook },
  { path: '/use-imperative-handle', name: 'Use Imperative Handle', Component: ImperativeHandleHook },
  { path: '/strict-vs-regular-mode', name: 'Strict vs Regular Mode', Component: StrictVsRegularMode },
  { path: '/layout-vs-regular-effect', name: 'Layout vs Regular Effect', Component: LayoutVsRegularEffect },
];

export const App = () => (
  <BrowserRouter>
    <NavMenu routes={routes} />
    <AppRoutes routes={routes} />
  </BrowserRouter>
);
