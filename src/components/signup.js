import React from 'react'
import Form from './form'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import useAuth from '../hooks/useAuth'

const Signup = () => {
  const dispatch = useDispatch()
  const { isAuth } = useAuth()

  const handleSignup = (e, formData) => {
    e.preventDefault()
    const auth = getAuth()
    const { email, password } = formData

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch({ type: 'SET_USER', payload: user })
      })
      .catch(console.log)
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  return <Form title='Signup' handleClick={handleSignup} />
}

export default Signup
