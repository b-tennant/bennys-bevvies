import React, { useEffect } from 'react';
import firebase from '../../firebase';
import { navigate } from "@reach/router";

const PrivateRoutes = (props)=> {
    const { children } = props;

useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
        if(!user){
            alert('you must be sgined in with google to access this page!')
            navigate('/');
        }
    })
}, [])

return ( 
    <>
    {children}
    </>


)

}

export default PrivateRoutes;