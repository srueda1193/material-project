import React, { createContext, useEffect, useState } from "react";
import type { AppUser } from "../interfaces/AppUser";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { getCurrentUserData, loginUser, logoutUser, registerUser } from "../services/AuthServices";

interface AuthContextProps {
  user: AppUser | null;
  loading: boolean;
  login: any;
  registro: any;
  logout: any;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  login: null,
  registro: null,
  logout: null,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

    const [user, setUser] = useState<AppUser | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        if (firebaseUser) {
          const userData = await getCurrentUserData(firebaseUser.uid);
          if (userData) setUser(userData);
        } else {
          setUser(null);
        }
        setLoading(false);
      });
  
      return () => unsubscribe();
    }, []);
  
    const login = async (email: string, password: string): Promise<AppUser | null> => {
      const userData = await loginUser(email, password);
      if (userData) setUser(userData);
      return userData;
    };
  
    const registro = async (
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ): Promise<AppUser> => {
      const newUser = await registerUser(email, password, firstName, lastName);
      setUser(newUser);
      return newUser;
    };
  
    const logout = async () => {
      await logoutUser();
      setUser(null);
    };


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        registro,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
