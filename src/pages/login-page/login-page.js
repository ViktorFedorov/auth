import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)

  return (
    <div>
      <h1>Login</h1>

      <p>
        Or <Link to='/register'>Register</Link>
      </p>

    </div>
  )
}

export default LoginPage