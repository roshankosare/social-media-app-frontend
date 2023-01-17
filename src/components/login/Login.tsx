import React from "react";
import AuthContainer from "../auth-container/AuthContainer";
import Input from "../auth-container/Input";
import Button from "../Button";

const Login = () => {
  return (
    <AuthContainer heading="Sign Up">
      <Input type="email" placeholder="email"></Input>
      <Input type="password" placeholder="password"></Input>
      <Button value="Sign In"></Button>
      <div className="flex justify-between px-3">
        <p>Don't hava an Account?</p>
        <button className="text-md text-blue-700">Sign Up</button>
      </div>
    </AuthContainer>
  );
};

export default Login;
