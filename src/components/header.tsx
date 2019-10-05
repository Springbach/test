import React from 'react';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const H1 = styled.h1`
  color: ${props => props.theme.colors.main};
  font-weight: bold;
`;

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  console.log('Current theme: ', themeContext);
  return <H1>Got it Baby!</H1>
}

export default Header;
