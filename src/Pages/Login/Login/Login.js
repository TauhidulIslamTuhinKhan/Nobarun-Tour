import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInWithGoogle} = useAuth();
    return (
        <div className="container d-flex justify-content-center pt-5">
            <div className="login-page">
                <h4>Please Login</h4> 
                <button onClick={signInWithGoogle}> Continue with Google</button>               
                <span>Don't have an account?</span><Link to='/register'>Creat an account</Link>
            </div>            
        </div>
    );
};

export default Login;