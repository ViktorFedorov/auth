import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='exampleInputEmail1'>Email address</label>
          <input
            type='email'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            placeholder='Enter email'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='exampleInputPassword1'>Password</label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            placeholder='Password'
          />
        </div>
      </form>

      <p>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  )
}

export default RegisterPage
