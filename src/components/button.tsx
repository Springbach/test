import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  auth: Boolean;
}

const StyledButton =
  styled.button<ButtonProps>`
  color: ${props => (props.auth ? props.theme.colors.main : props.theme.colors.secondary)}
`

const Button: React.FC<ButtonProps> = props => {
  const { auth } = props;
  return <StyledButton onClick={()=>alert('ACTION:' + auth?"exit":"enter" )} auth={auth}>{auth?"Вход":"Выход"}</StyledButton>
}

export default Button;
