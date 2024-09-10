// authService.js
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { app } from './firebase';  // Import Firebase app initialization (assumed you have a firebase.js file)

const auth = getAuth(app);  // Initialize Firebase Authentication
const db = getFirestore(app);  // Initialize Firestore

// Sign Up new user
export const signUp = async (email, password, additionalData = {}) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Save additional user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        ...additionalData
        });

        console.log("User signed up:", user);
    } catch (error) {
        console.error("Error signing up:", error.message);
    }
};

// Login existing user
export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in:", userCredential.user);
    } catch (error) {
        console.error("Error logging in:", error.message);
    }
};

// Logout user
export const logout = async () => {
    try {
        await signOut(auth);
        console.log("User logged out");
    } catch (error) {
        console.error("Error logging out:", error.message);
    }
};

// Optional: Fetch user data from Firestore
export const getUserData = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log("No such user data!");
        return null;
    }
};