import React, {useContext} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
//import { DefaultTheme } from 'styled-components';
import { routes } from '../router/routes';
import Button from './button';
import { StoreCTX } from '../store';
import Logo from '../components/logo';
//interface NavbarProps {
  //theme?: DefaultTheme;
  //className?: string;
//  links: Array<{ name: string; to: string, private: boolean, showLink: boolean }>;
  //auth: boolean;
//}
//type Links = Array<{ name: string; to: string, private: boolean, showLink: boolean }>
const Header = styled.nav`
  width: 100%;
  position: fixed;
  height: 80px;
  top: 0;
  background: white;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Center = styled.div`
  width: 800px;
  display: flex;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledLink = styled(NavLink)`
    display: inline-block;
    vertical-align: top;
    height: 34px;
    line-height: 36px;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
    letter-spacing: 0.1em;
    text-align: center;
    font-size: 0.8rem;
    margin: 10px;
    position: relative;
    span {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        text-align: center;
    }
    border: 2px solid transparent;
    &::after {
        width: 0%;
        height: 2px;
        display: block;
        background-color: #000;
        content: " ";
        position: absolute;
        top: 34px;
        left: 50%;
        transition: left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1), width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    &:hover {
      &::after {
        width: 100%;
        height: 2px;
        display: block;
        background-color: #000;
        content: " ";
        position: absolute;
        top: 34px;
        left: 0;
      }

`;



const Navbar: React.FC = () => {
  const { links } = routes;
  const { state } = useContext(StoreCTX);
  let { pathname } = useLocation();
  const NavLinks: any = () => (state.auth?links.filter(link=>link.showLink):links.filter(link => !link.private&&link.showLink)).map(link => <li key={link.name}><StyledLink exact to={link.to}>{link.name}</StyledLink></li>);
  return (pathname === '/login'? null:
    <Header>
      <Logo />
      <Center>
        <UL>
        <NavLinks />
        </UL>
      </Center>
      <Button />
    </Header>)
}

export default Navbar;
