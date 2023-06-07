import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUserName = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            if(currentUser){
                axios.post('http://localhost:5000/jwt' , {email : currentUser.email})
                .then(data=>{
                    console.log(data.data.token);
                    localStorage.setItem('access-token', data.data.token)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return () =>{
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserName,
        googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;