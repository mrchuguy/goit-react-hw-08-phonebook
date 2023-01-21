import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  line-height: 1.33px;
  color: #919399;
`;

export const Input = styled.input`
  width: 500px;
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
