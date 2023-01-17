import React from 'react'
import AuthContainer from '../auth-container/AuthContainer'
import Input from '../auth-container/Input'
import Button from '../Button'

const SignUp = () => {
  return (
    <AuthContainer heading = "Sign Up">
        <Input type="text" placeholder="username" ></Input>
        <Input type="email" placeholder="email" ></Input>
        <Input type="password" placeholder="password" ></Input>
        <Input type="password" placeholder=" confirm password" ></Input>
        <Button value="Sign Up"></Button>
        <div className="flex justify-between px-3">
        <p>Already hava an Account?</p>
        <button className="text-md text-blue-700">Sign In</button>
      </div>
      </AuthContainer>
  )
}

export default SignUp