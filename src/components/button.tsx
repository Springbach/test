import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { StoreCTX } from '../store';

interface ButtonProps {
    auth: boolean;
}

const StyledButton =
  styled.button<ButtonProps>`
  color: ${props => (props.auth ? props.theme.colors.main : props.theme.colors.secondary)}
`
const Button: React.FC = () => {
  let history = useHistory()
  const { state, dispatch } = useContext(StoreCTX);
  const logout = () => dispatch({ type: "LOGOUT" });
  const login = () => history.push('/login');
  return <StyledButton onClick={(state.auth ? logout : login)} auth={state.auth}>{state.auth?"Выйти":"Войти"}</StyledButton>
}

export default Button;
