import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.space[3]}px;
  height: 80px;
  padding: 0 50px;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0px 0px 2px rgba(14, 31, 53, 0.12);
`;
