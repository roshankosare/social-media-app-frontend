import React, { ReactNode, useContext } from "react";

export interface IAuthContext {
  isAuthenticated: boolean;
}

export const AuthContext = React.createContext<IAuthContext | null>(null);
export const useAuth = ()=>{
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  let isAuthenticated = true;
  const values: IAuthContext = {
    isAuthenticated,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
