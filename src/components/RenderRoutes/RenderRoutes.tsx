import React from 'react';
import {Route, Switch} from 'react-router';
import RouteWithSubRoutes from './RouteWithSubRoutes';

interface RenderRoutesProps {
    routes:object[]
}

const RenderRoutes: React.FC<RenderRoutesProps> = ({routes}) => (
    <>
        <Switch>
            {routes.map((route: any) => (
                <RouteWithSubRoutes key={route.key} {...route} />
            ))}
            <Route component={() => <h1>Page not found!</h1>}/>
        </Switch>
    </>
);

export default RenderRoutes;
