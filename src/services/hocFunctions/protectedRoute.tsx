import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth, checkAuth } from '../../features/auth/authSlice';

export interface IProtectedRouteProps extends RouteProps {
    redirectPath: string; // redirect path if don't authenticate route
}
const ProtectedRoute: React.FC<IProtectedRouteProps> = ({ component, redirectPath, ...props }) => {
    const dispatch = useDispatch();
    if (localStorage.getItem('access')) {
        dispatch(checkAuth(true));
    } else {
        dispatch(checkAuth(false));
    }
    const isAuth = useSelector(selectAuth);
    console.log('Auth', isAuth);
    return isAuth ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Route {...props} component={component} render={undefined} />
    ) : (
        <Redirect to={{ pathname: redirectPath }} />
    );
};

export default ProtectedRoute;
