import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userReducer.user)

  return (
    <div>
      <h1>Login</h1>
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
        Or <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

export default LoginPage
