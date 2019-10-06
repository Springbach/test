import React, {useContext} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from './routes';
import { StoreCTX } from '../store';


const Routes: React.FC = () => {
   const { state } = useContext(StoreCTX);
   const {links} = routes;
   const AppRoutes: any = () => links.map((link: { name: string, to: string, icon?: any, component: any, private: boolean }) =>
              link.private?<Route key={link.to} exact path = {link.to}>{state.auth?<link.component/>:<Redirect to="/login"/>}</Route>:<Route exact path = {link.to} component={link.component} key={link.to}/>);
   return <Switch>
              <AppRoutes />
          </Switch>
}

export {Routes};
