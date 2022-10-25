import React, { createContext } from 'react';
import app from './../firebase/firebase.init';
import  { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
export const AuthContext =createContext()

const UserContext = ({children}) => {
const auth = getAuth(app)
    const user ={displayName:"Juliana"}

    
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut (auth)
    }
    const authInfo ={user ,createUser, signIn,logOut}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;