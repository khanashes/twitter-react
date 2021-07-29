import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export interface IProtectedRouteProps extends RouteProps {
    redirectPath: string; // redirect path if don't authenticate route
}
const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ component, redirectPath, ...props }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return isAuthenticated ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Route {...props} component={component} render={undefined} />
    ) : (
        <Redirect to={{ pathname: redirectPath }} />
    );
    // return (
    //     <Route
    //         // eslint-disable-next-line react/jsx-props-no-spreading
    //         {...rest}
    //         // eslint-disable-next-line react/jsx-props-no-spreading
    //         render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    //     />
    // );
};

export default ProtectedRoute;
