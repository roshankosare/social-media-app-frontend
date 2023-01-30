import React from 'react'
import LogIn from '../../components/login/Login'
import SignUp from '../../components/signup/SignUp';
import { useAuthModel } from './AuthModelContext'

const Auth = () => {
  const {model} = useAuthModel();

  return (
 <>{
  model === "login"?<LogIn/>:<SignUp/>
 }

 </>
  )
}

export default Auth