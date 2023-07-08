import React from 'react'
import Form from './form'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const dispatch = useDispatch()
  // const auth = getAuth()

  const handleLogin = (e, formData) => {
    e.preventDefault()
    const { email, password } = formData

    // signInWithEmailAndPassword(auth, email, password)
    //   .then(console.log)
    //   .catch((error) => {
    //     const errorCode = error.code
    //     const errorMessage = error.message
    //   })

    // dispatch({ type: 'SET_USER' })
  }

  return <Form title='Login' handleClick={handleLogin} />
}

export default Login
