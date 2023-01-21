import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthLink = styled(NavLink)`
  text-decoration: none;
  padding: 12px 20px;
  color: #fff;
  margin-right: 10px;
  font-size: 18px;
  line-height: 1.33;
  font-weight: 400;
  background: #465efd;
  border-radius: 12px;
  &:hover,
  &:focus {
    background: #528fdf;
  }
`;
