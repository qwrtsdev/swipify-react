import React, { useEffect, useState } from 'react';
import './TestPage.css';

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
    measurementId: `${import.meta.env.VITE_FB_MID}`
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function TestPage() {
    const [authStage, setAuthStage] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setAuthStage(user);
        });

        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const userLogout = async () => {
        try {
            await signOut(auth);
            window.location.reload();
        } catch {
            toast.warn("Error when logged out")
        }
    }

    return (
        <div>
            {authStage ? (
                <>
                    <p>hello, {authStage.email}</p>
                    <button onClick={userLogout}>logout</button>
                </>
            ) : (
                <p>there is no user</p>
            )}
        </div>
    );
}

export default TestPage;