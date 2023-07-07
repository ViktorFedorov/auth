import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {

  const dispatch = useDispatch()

  const counter = useSelector(store => store)

  const handleClick = () => {
    dispatch({type: 'INC'})
  }

  return (
    <div>
      <h1>Login</h1>
      <p>
        Or <Link to='/register'>Register</Link>
      </p>

      <h2>{counter}</h2>
      <button onClick={() => handleClick()}>+1</button>
    </div>
  )
}

export default LoginPage