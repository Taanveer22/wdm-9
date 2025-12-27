import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
// === create context outside component====
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // function 01
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // function 02
  const userSignOut = () => {
    return signOut(auth);
  };
  // function 03
  const userUpdateProfile = (userName, userPhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };
  // function 04
  const userCreateByRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // function 04
  const userSigninByLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authData = {
    user,
    userUpdateProfile,
    googleSignIn,
    userSignOut,
    userCreateByRegister,
    userSigninByLogin,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
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
