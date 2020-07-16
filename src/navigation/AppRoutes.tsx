import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppRoute } from './interfaces';

interface Props {
  routes: AppRoute[];
}

export const AppRoutes: React.FC<Props> = ({ routes }) => (
  <Switch>
    {routes.map(({ path, Component }) => (
      <Route key={path} path={path}>
        <Component />
      </Route>
    ))}
  </Switch>
);
