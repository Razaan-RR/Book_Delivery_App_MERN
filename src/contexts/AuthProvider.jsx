// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from 'firebase/auth'
// import { AuthContext } from './AuthContext'
// import { auth } from '../firebase/firebase.init'
// import { GoogleAuthProvider } from 'firebase/auth'
// import { useEffect, useState } from 'react'

// const provider = new GoogleAuthProvider()

// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null)
//   const [loading, setLoading] = useState(true)

//   const registerUser = (email, password) => {
//     setLoading(true)
//     return createUserWithEmailAndPassword(auth, email, password)
//   }

//   const login = (email, password) => {
//     setLoading(true)
//     return signInWithEmailAndPassword(auth, email, password)
//   }

//   const signInWithGoogle = () => {
//     setLoading(true)
//     return signInWithPopup(auth, provider)
//   }

//   const updateUserProfile = (profile)=>{
//     return updateProfile(auth.currentUser, profile)
//   }

//   const logOut = () => {
//     setLoading(true)
//     return signOut(auth)
//   }

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser)
//       setLoading(false)
//     })
//     return () => {
//       unSubscribe()
//     }
//   }, [])

//   const authInfo = {
//     user,
//     loading,
//     logOut,
//     registerUser,
//     login,
//     signInWithGoogle,
//     updateUserProfile
//   }

//   return <AuthContext value={authInfo}>{children}</AuthContext>
// }

// export default AuthProvider


import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";

import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.init";

const provider = new GoogleAuthProvider();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email/password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // Update user profile (name, image)
  const updateUserProfile = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // Set default role: user
        currentUser.role = currentUser.role || "user";
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unSubscribe();
  }, []);

  // Values exposed to the entire app
  const authInfo = {
    user,
    loading,
    registerUser,
    login,
    logOut,
    signInWithGoogle,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
