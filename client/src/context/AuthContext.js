import React from 'react';
import { createContext, useContext, useState } from 'react';
import { createUser, loginUser } from '../services/apiUser';

const AuthContext = createContext({});

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
  };
  

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const signup = async (user) => {
      try {
        const response = await createUser(user);
        setUser(response);
        setIsLogged(true);
        console.log(response)

      } catch (err) {
        console.log('Auth error:', err)
      }
    }

    const signin = async (user) => {
      try {
        const response = await loginUser(user);
        setUser(response);
        setIsLogged(response);

      } catch (err) {
        console.log('Auth error:', err)
      }
    }

  return (
    <AuthContext.Provider value={{signup, signin, user, isLogged}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;