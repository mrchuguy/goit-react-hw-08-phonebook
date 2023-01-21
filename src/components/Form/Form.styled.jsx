import styled from 'styled-components';
import { ImPlus } from 'react-icons/im';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.33;
  color: #919399;
  margin-bottom: 21px;
`;

export const Input = styled.input`
  max-width: 500px;
  margin-top: 9px;
  color: #2c2d2e;
  font-size: 18px;
  line-height: 1.33;
  padding: 11px 15px;
  border-radius: 6px;
  border: 1px solid rgba(0, 16, 61, 0.3);
  &:hover,
  :focus {
    border: 1px solid #465efd;
    outline: none;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  border: none;
  justify-content: center;
  width: 180px;
  padding: 12px 20px;
  color: #fff;
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

export const Icon = styled(ImPlus)`
  margin-left: 10px;
`;
