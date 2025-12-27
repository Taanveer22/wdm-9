import {
  GoogleAuthProvider,
  onAuthStateChanged,
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

  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const userUpdateProfile = (userName, userPhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhoto,
    });
  };

  const authData = {
    user,
    userUpdateProfile,
    googleSignIn,
    userSignOut
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
