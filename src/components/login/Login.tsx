import React, { useState } from "react";
import { useAuthModel } from "../../pages/auth/AuthModelContext";
import AuthContainer from "../auth-container/AuthContainer";
import Input from "../comman/Input";
import Button from "../comman/Button";
import { logIn } from "./logInUtils";
import { useNavigate } from "react-router-dom";
const LogIn = () => {
  const { setModelType } = useAuthModel();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogIn = async () => {
    const { isAuthenticated, errors } = await logIn(email, password);

    if (isAuthenticated) navigate("/");

    if (errors) console.log(errors);
  };

  return (
    <AuthContainer heading="Sign Up">
      <Input type="email" placeholder="email" handleFunction={setEmail}></Input>
      <Input
        type="password"
        placeholder="password"
        handleFunction={setPassword}
      ></Input>
      <Button value="Sign In" handleFunction={handleLogIn}></Button>
      <div className="flex justify-between px-3">
        <p>Don't hava an Account?</p>
        <button
          className="text-md text-blue-700"
          onClick={() => setModelType("signup")}
        >
          Sign Up
        </button>
      </div>
    </AuthContainer>
  );
};

export default LogIn;
