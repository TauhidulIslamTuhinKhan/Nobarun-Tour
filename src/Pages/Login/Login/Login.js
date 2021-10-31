import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin =() => {
        signInWithGoogle()
        .then(result => {
           history.push(redirect_uri);
        })
    }
    
    return (
        <div className="container d-flex justify-content-center pt-5">
            <div className="login-page">
                <h4>Please Login</h4> 
                <button onClick={handleGoogleLogin}> Continue with Google</button>                    
            </div>            
        </div>
    );
};

export default Login;