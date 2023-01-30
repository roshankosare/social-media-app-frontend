import React, { ReactNode, useContext, useState } from "react";

type model = "login" | "singup";
export interface IAuthModelContext {
  model: model;
  setModelType: Function;
}
export const useAuthModel = () => {
  return useContext(AuthModelContext);
};
const values: IAuthModelContext = {
  model: "singup",
  setModelType: () => {},
};

export const AuthModelContext = React.createContext<IAuthModelContext>(values);

export const AuthModelProvider = ({ children }: { children: ReactNode }) => {
  const setModelType = (value: model) => {
    setModel(value);
  };

  const [model, setModel] = useState<model>("login");
  const values: IAuthModelContext = {
    model,
    setModelType,
  };

  return (
    <AuthModelContext.Provider value={values}>
      {children}
    </AuthModelContext.Provider>
  );
};
