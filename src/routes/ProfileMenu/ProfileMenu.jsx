import React, { useEffect, useState } from 'react'
import './ProfileMenu.css';
import { NavLink, useNavigate } from "react-router-dom"

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
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
    measurementId: `${import.meta.env.VITE_FB_MID}`,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function ProfileMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authUser = onAuthStateChanged(auth, (user) => {
        setUser({
          uid: user.uid,
          email: user.email,
          creationTime: user.metadata.creationTime,
          lastSignInTime: user.metadata.lastSignInTime,
        });
    });

    return () => authUser(); // Cleanup subscription on unmount
  }, []);

  const userLogout = async () => {
    try {
        await signOut(auth);
        window.location.reload();
    } catch {
        toast.warn("Error when logged out")
    }
  }

  if(!user) {
    return (
      <div className='profile'>
        <div className="profile__prompt">
          <p>Please login before usiing Swipify</p>
          <div className="profile__prompt__button">
            <NavLink to='/register' className='profile__prompt__button--text'><button><strong>Register</strong></button></NavLink>
            <NavLink to='/login' className='profile__prompt__button--text'><button><strong>Login</strong></button></NavLink>
          </div>
        </div>
    </div>
    );
  }

  return (
    <div className='profile'>
        
        <button onClick={userLogout}>logout</button>
    </div>
  );
}

export default ProfileMenu;