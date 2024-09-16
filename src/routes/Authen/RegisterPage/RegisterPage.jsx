import React, { useEffect, useState } from 'react';
import './RegisterPage.css';
import { NavLink, useNavigate } from "react-router-dom"

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const formSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
            toast.success("Successfully created an account.");
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
        <div className="register-form">

            <h2 className='register-form__header'>Register</h2>
            <form action="" className='register-form__form-control' onSubmit={formSubmit}>
                <label htmlFor="form_email">Email</label>
                <input 
                    type="email" 
                    id='form_email'
                    placeholder='yourmail@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="form_password">Password</label>
                <input 
                    type="password" 
                    id='form_password' 
                    placeholder='A-Z, 0-9'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
            <p className='register-form__login'>Already have account? <NavLink to='/login' className='lower-nav-icon'>Login</NavLink></p>

        </div>
    );
}

export default RegisterPage;