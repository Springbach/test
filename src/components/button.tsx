import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { StoreCTX } from '../store';

interface ButtonProps {
    auth: boolean;
}
//using theme: ${props => (props.auth ? props.theme.colors.main : props.theme.colors.secondary)};
const StyledButton = styled.button<ButtonProps>`
  background: ${props => (props.auth ? '#f85f64':'#4285F4')};
  color: #fff;
  outline: none;
  text-transform: uppercase;
  padding: 1.2em;
  overflow: hidden;
  border: none;
  letter-spacing: 0.1em;
  margin: 0.5em 0;
  font-weight: 300;
  border-radius: 0.4em;
  transition: all 0.15s ease-in-out;
  &:hover {
    background: ${props => (props.auth ? 'rgba(248, 95, 100, 0.8)':'rgba(66, 133, 244, 0.8)')};
  }
`
const Button: React.FC = () => {
  let history = useHistory()
  const { state, dispatch } = useContext(StoreCTX);
  const logout = () => dispatch({ type: "LOGOUT" });
  const login = () => history.push('/login');
  return <StyledButton onClick={(state.auth ? logout : login)} auth={state.auth}>{state.auth?"Выйти":"Войти"}</StyledButton>
}

export default Button;
