import React from 'react'
import { Link } from 'react-router-dom'
import Signup from '../../components/signup'

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <Signup />
      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  )
}

export default RegisterPage
