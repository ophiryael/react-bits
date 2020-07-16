import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AppRoute } from './interfaces';

interface Props {
  routes: AppRoute[];
}

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }
`;

export const NavMenu: React.FC<Props> = ({ routes }) => (
  <nav>
    <ul>
      {routes.map(route => (
        <li key={route.path}>
          <StyledNavLink to={route.path}>{route.name}</StyledNavLink>
        </li>
      ))}
    </ul>
  </nav>
);
