import React from 'react';
import { NavLink } from 'react-router-dom'
import { DefaultTheme } from 'styled-components';
import Button from './button';

interface NavbarProps {
  theme?: DefaultTheme;
  className?: string;
  links: Array<{ name: string; to: string, private: boolean, showLink: boolean }>;
  auth: boolean;
}

const Navbar: React.FC<NavbarProps> = props => {
  const { links, auth } = props;
  const NavLinks: any = () => (auth?links.filter(link=>link.showLink):links.filter(link => !link.private&&link.showLink)).map(link => <li key={link.name}><NavLink exact to={link.to}>{link.name}</NavLink></li>);
  return (
    <nav>
      <NavLinks />
      <Button auth={auth}/>
    </nav>)
}

export default Navbar;
