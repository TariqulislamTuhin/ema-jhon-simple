import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const[loggedInUser] =  useContext(UserContext);

    return (
        <>
        {
            loggedInUser.email ? {children} : <Navigate to="/login" replace={true} />
        }
        </>
    );
};

export default PrivateRoute;