import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
// === create context outside component====
const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // function 01
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // function 02
  const userSignOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // function 03
  const userPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // function 04
  const userCreateByRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // function 04
  const userSigninByLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // function 06
  const userUpdateProfile = (userName, userPhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };

  const authData = {
    user,
    loading,
    userUpdateProfile,
    googleSignIn,
    userSignOut,
    userCreateByRegister,
    userSigninByLogin,
    userPasswordReset,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
