import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { useDispatch } from 'react-redux'

const HomePage = () => {
  const { isAuth, email } = useAuth()
  const dispatch = useDispatch()

  return isAuth ? (
    <>
      <h1>Home</h1>
      <button
        className='btn btn-danger'
        onClick={() => dispatch({ type: 'REMOVE_USER' })}
      >
        Logout from {email}
      </button>
    </>
  ) : (
    <Navigate to='/login' />
  )
}

export default HomePage
