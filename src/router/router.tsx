import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from './routes';

interface RouterProps {
  auth: boolean;
}

const Routes: React.FC<RouterProps> = (props) => {
   const {links} = routes;
   const AppRoutes: any = () => links.map((link: { name: string, to: string, icon?: any, component: any, private: boolean }) =>
              link.private?<Route key={link.to} exact path = {link.to}>{props.auth?<link.component/>:<Redirect to="/login"/>}</Route>:<Route exact path = {link.to} component={link.component} key={link.to}/>);
   return <Switch>
              <AppRoutes />
          </Switch>
}

export {Routes};
