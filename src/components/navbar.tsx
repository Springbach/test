import React from 'react';
import { useContext } from 'react';
//import styled, { ThemeContext, ThemeInterface } from 'styled-components';
import { ThemeContext, DefaultTheme } from 'styled-components';
import Button from './button';

interface NavbarProps {
  theme?: DefaultTheme;
  className?: string;
  links: Array<{ name: string; to: string, private: true | false }>;
  auth: true | false;
}

//const H1 = styled.h1`
//  color: ${props => props.theme.colors.main};
//  font-weight: bold;
//`;

const Navbar: React.FC<NavbarProps> = props => {
  const themeContext = useContext(ThemeContext);
  console.log('Current theme: ', themeContext);
  const { links, auth } = props;
  const NavLinks: any = () => (auth?links:links.filter((link: { name: string, to: string, icon?: any, private: true | false }) => !link.private)).map((link: { name: string, to: string, icon?: any, private: true | false }) => <li key={link.name}><a href={link.to}>{link.name}</a></li>);
  return (
    <div>
      {/*<a href={brand.to}>{brand.name}</a>*/}
      <NavLinks />
      <Button auth={auth}/>
    </div>)
}

export default Navbar;
