import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
//import { DefaultTheme } from 'styled-components';
import { routes } from '../router/routes';
import Button from './button';
import { StoreCTX } from '../store';
//interface NavbarProps {
  //theme?: DefaultTheme;
  //className?: string;
//  links: Array<{ name: string; to: string, private: boolean, showLink: boolean }>;
  //auth: boolean;
//}
//type Links = Array<{ name: string; to: string, private: boolean, showLink: boolean }>

const Navbar: React.FC = () => {
  const { links } = routes;
  const { state } = useContext(StoreCTX);
  let { pathname } = useLocation();
  const NavLinks: any = () => (state.auth?links.filter(link=>link.showLink):links.filter(link => !link.private&&link.showLink)).map(link => <li key={link.name}><NavLink exact to={link.to}>{link.name}</NavLink></li>);
  return (pathname === '/login'? null:
    <nav>
      <NavLinks />
      <Button />
    </nav>)
}

export default Navbar;
