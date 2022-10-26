import React, { createContext, useEffect, useState } from 'react';
import app from './../firebase/firebase.init';
import  { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, GithubAuthProvider } from 'firebase/auth'
export const AuthContext =createContext()
const auth = getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] =useState(true)

    // const user ={displayName:"Juliana"}
    
const googleProvider =new GoogleAuthProvider()
const githubProvider =new GithubAuthProvider()

    
//createNewUser by registrations
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //for login
    const signIn =(email,password) =>{
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }

    
//google signIn
const signInwithGoogle=()=>{
    setLoading(true)

return signInWithPopup(auth , googleProvider)
}

//githubsignIn
const signInWithGithub=()=>{
    return signInWithPopup (auth, githubProvider)
}

//for update profile
const updateUserProfile =(profile)=>{
    return updateProfile(auth.currentUser, profile)
}

//for logout
 const logOut =()=>{
    setLoading(true)
    return signOut (auth)
}

// authStateChaned 
useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        setLoading(false)
console.log('changed state', currentUser)
    })
    return ()=>{
        unsubscribe();
    }
}, [])

    const authInfo ={user ,createUser, signIn,logOut,signInwithGoogle, loading,updateUserProfile, signInWithGithub}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;