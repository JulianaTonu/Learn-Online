import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.init';
import  { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
export const AuthContext =createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState()
    // const user ={displayName:"Juliana"}
    
const googleProvider =new GoogleAuthProvider()
    
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut (auth)
    }

const signInwithGoogle=()=>{
return signInWithPopup(auth , googleProvider)
}

useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
console.log('changed state', currentUser)
    })
    return ()=>{
        unsubscribe();
    }
}, [])

    const authInfo ={user ,createUser, signIn,logOut,signInwithGoogle}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;