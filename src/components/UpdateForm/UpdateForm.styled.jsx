import styled from 'styled-components';

export const FormBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyleUpdateForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  background: #fff;
  border-radius: 16px;
  padding: 32px 24px;
`;

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

export const CloseButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #00103d1f;
  padding: 7px;
  background: transparent;
  color: #fff;
  transition: transform 0.3s;
  :hover,
  :focus {
    transform: rotate(90deg);
  }
`;

export const EditButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  padding: 12px 50px;
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
