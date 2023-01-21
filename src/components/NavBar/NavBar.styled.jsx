import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
  font-size: 21px;
  margin-right: 12px;
  line-height: 1.2;
  color: #005bd1;
  &:hover,
  &:focus {
    color: #528fdf;
  }
`;
