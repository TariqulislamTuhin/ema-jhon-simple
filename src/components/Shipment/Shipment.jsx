import React,{ useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './../../App';
import { useEffect } from 'react';

const Shipment = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useNavigate();
    useEffect(()=>{
        loggedInUser && !loggedInUser.name && history('/login');
    },[]);
    
    return (
        <div>
            <h1>This is shipment Page</h1>
        </div>
    );
};

export default Shipment;