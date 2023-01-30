import React, { useState } from "react";

import { useAuthModel } from "../../pages/auth/AuthModelContext";
import AuthContainer from "../auth-container/AuthContainer";
import Input from "../comman/Input";
import Button from "../comman/Button";
import { signUp } from "./singUpUtil";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handelSignUp = async () => {
    const { isAuthenticated, errors } = await signUp(email, password, username);

    if (isAuthenticated) navigate("/");

    if (errors) console.log(errors);
  };

  const { setModelType } = useAuthModel();
  return (
    <AuthContainer heading="Sign Up">
      <Input
        type="text"
        placeholder="username"
        handleFunction={setUsername}
      ></Input>
      <Input type="email" placeholder="email" handleFunction={setEmail}></Input>
      <Input
        type="password"
        placeholder="password"
        handleFunction={setPassword}
      ></Input>
      <Input type="password" placeholder=" confirm password"></Input>
      <Button value="Sign Up" handleFunction={handelSignUp}></Button>
      <div className="flex justify-between px-3">
        <p>Already hava an Account?</p>
        <button
          className="text-md text-blue-700"
          onClick={() => setModelType("login")}
        >
          Sign In
        </button>
      </div>
    </AuthContainer>
  );
};

export default SignUp;
