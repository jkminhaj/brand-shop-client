import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [loading , setLoading] = useState(true);
    const [user ,setUser ] = useState(null);
    // holding user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])



    // Create a password-based account
    const createUser = (email , password)=>{
        setUser(true)
        return createUserWithEmailAndPassword(auth , email , password);
    }

    // log in user
    const logIn = (email , password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password);
    }


    // Google Provider
    const googleProvider = new GoogleAuthProvider();
    const connectGoogle = () =>{
        return signInWithPopup(auth , googleProvider);
    }

    // log out
    const logOut = () =>{
        return signOut(auth);
    }


    const [lightTheme , setLightTheme] = useState(true);
    // pass data here !
    const globalSharedData = {
        createUser,
        connectGoogle,
        user,
        logOut,
        logIn,
        loading,
        setLoading,
        lightTheme,
        setLightTheme
    }

    // main part
    return (
        <AuthContext.Provider value={globalSharedData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;