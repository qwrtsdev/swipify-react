import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { NavLink, useNavigate } from "react-router-dom"

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// NOTE: Firebase configuration & initialize
const firebaseConfig = {
    apiKey: `${import.meta.env.VITE_FB_APIKEY}`,
    authDomain: `${import.meta.env.VITE_FB_AUTHDOMAIN}`,
    projectId: `${import.meta.env.VITE_FB_PROJECTID}`,
    storageBucket: `${import.meta.env.VITE_FB_STORAGE}`,
    messagingSenderId: `${import.meta.env.VITE_FB_MESSAGE}`,
    appId: `${import.meta.env.VITE_FB_APPID}`,
    measurementId: `${import.meta.env.VITE_FB_MID}`
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();

        await signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
            toast.success("Successfully logged in.");

            setEmail('');
            setPassword('');
            
            navigate('/');
        }).catch((error) => {
            toast.error(error.message);

            setEmail('');
            setPassword('');
        })
    }

    return (
        <div className="login-form">

            <h2 className='login-form__header'>Login</h2>
            <form action="" className='login-form__form-control' onSubmit={formSubmit}>
                <label htmlFor="form_email">Email</label>
                <input 
                    type="email" 
                    id='form_email'
                    placeholder='yourmail@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="login_password">Password</label>
                <input 
                    type="password" 
                    id='login_password' 
                    placeholder='A-Z, 0-9'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <p className='register-form__login'>No account yet? <NavLink to='/register' className='lower-nav-icon'>Register</NavLink></p>

        </div>
    );
}

export default LoginPage;