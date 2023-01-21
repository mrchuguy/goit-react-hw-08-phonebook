import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px;
  border-bottom: 1px solid rgba(0, 16, 61, 0.12); ;
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  font-size: 20px;
  line-height: 1.33;
  color: #2c2d2e;
`;

export const Name = styled.span``;

export const Number = styled.span``;

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid red;
  padding: 7px;
  background-color: red;
  color: #fff;
  :hover,
  :focus {
    background-color: #fff;
    color: red;
  }
`;

export const ButtonEdit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${props => props.theme.radii.round};
  border: 1px solid #465efd;
  padding: 7px;
  background-color: #465efd;
  color: ${props => props.theme.colors.white};
  :hover,
  :focus {
    background-color: #fff;
    color: #465efd;
  }
`;
