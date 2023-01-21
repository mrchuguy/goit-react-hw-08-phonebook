import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 1.33px;
  color: #919399;
  margin-bottom: 18px;
`;

export const Input = styled.input`
  width: 400px;
  margin: 20px auto 0 auto;
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

export const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  color: #005bd1;
`;

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  padding: 12px 35px;
  border: none;
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
