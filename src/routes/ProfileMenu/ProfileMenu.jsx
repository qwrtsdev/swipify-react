import React, { useEffect, useState } from 'react'
import './ProfileMenu.css';
import { NavLink, useNavigate } from "react-router-dom"

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket, faAt, faFingerprint, faClock } from '@fortawesome/free-solid-svg-icons'

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

  const avatarName = user ? user.email.split('@')[0] : 'Guest';

  const navigate = useNavigate();
  const userLogout = async () => {
    try {
        await signOut(auth);
        navigate('/');
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
      <div className="profile--logged">
        <div className="profile__avatar">
          <img src="" alt="" />
          <p>{avatarName}</p>
        </div>
        <table className="profile__info">
          <tr>
            <p className='profile__info--label'><FontAwesomeIcon icon={faAt} /> Email :</p>
            <p className='profile__info--value'>{user.email}</p>
          </tr>
          <tr>
            <p className='profile__info--label'><FontAwesomeIcon icon={faFingerprint} /> UID :</p>
            <p className='profile__info--value'>{user.uid}</p>
          </tr>
          <tr>
            <p className='profile__info--label'><FontAwesomeIcon icon={faClock} /> User Created :</p>
            <p className='profile__info--value'>{user.creationTime}</p>
          </tr>
          <tr>
            <p className='profile__info--label'><FontAwesomeIcon icon={faClock} /> Last Login :</p>
            <p className='profile__info--value'>{user.lastSignInTime}</p>
          </tr>
        </table>
        <button className='profile__logout' onClick={userLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Logout</button>
      </div>
    </div>
  );
}

export default ProfileMenu;