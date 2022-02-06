import React from 'react';
import {Route} from 'react-router';

interface RouteWithSubRoutesProps {
  path: string,
  key: string,
  exact: boolean,
  component: React.ElementType,
  routes: object
}

export const RouteWithSubRoutes: React.FC<RouteWithSubRoutesProps> = (route) => {
  const {path, exact, routes} = route;
  return (
      <Route
          path={path}
          exact={exact}
          render={(props) => <route.component {...props} routes={routes}/>}
      />
  );
};

export default RouteWithSubRoutes;
