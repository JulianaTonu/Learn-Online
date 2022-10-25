import React, { createContext } from 'react';
import app from './../firebase/firebase.init';
import  { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
export const AuthContext =createContext()

const UserContext = ({children}) => {
const auth = getAuth(app)
    const user ={displayName:"Juliana"}

    
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={user ,createUser}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;