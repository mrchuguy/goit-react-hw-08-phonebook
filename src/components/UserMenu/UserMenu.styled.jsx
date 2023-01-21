import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  padding: 8px 20px;
  border: none;
  color: #fff;
  font-size: 14px;
  line-height: 1.33;
  background: #465efd;
  border-radius: 12px;
  &:hover,
  &:focus {
    background: #528fdf;
  }
`;

export const Username = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: #2c2d2e;
  margin-right: 12px;
`;
