import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { LoginForm } from '../../components/loginform';
import { StoreCTX } from '../../store';




const Login: React.FC = () => {
   let history = useHistory()
   const { dispatch } = useContext(StoreCTX);
   return <div>
              <LoginForm dispatch = { dispatch } history = { history }/>              
          </div>
}

export default Login;
