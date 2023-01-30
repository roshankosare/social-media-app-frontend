import React from 'react'
import Auth from './Auth'
import { AuthModelProvider } from './AuthModelContext'

const AuthPage = () => {

  return (
    <AuthModelProvider>
        <Auth/>
    </AuthModelProvider>
  )
}

export default AuthPage