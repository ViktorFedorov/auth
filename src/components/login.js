import React from 'react'
import Form from './form'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Login = () => {
  const dispatch = useDispatch()
  const auth = getAuth()
  const { isAuth } = useAuth()

  const handleLogin = (e, formData) => {
    e.preventDefault()
    const { email, password } = formData

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({ type: 'SET_USER', payload: user })
      })
      .catch(console.log)
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  return <Form title='Login' handleClick={handleLogin} />
}

export default Login
