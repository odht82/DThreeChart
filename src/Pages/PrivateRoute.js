import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Components/Loading/Loading';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <Loading /> }
    if (user.email) {
        return children;
    }
    return <Navigate to="/auth/registration" state={{ from: location }} />;

};

export default PrivateRoute;