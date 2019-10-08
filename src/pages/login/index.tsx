import React, { useContext } from 'react';
import { LoginForm } from '../../components/loginform';
import { StoreCTX } from '../../store';




const Login: React.FC = (props) => {
   const { dispatch } = useContext(StoreCTX);
   return <LoginForm dispatch = { dispatch } { ...props }/>          
}

export default Login;
