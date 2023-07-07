import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {Navigate} from 'react-router-dom'


const HomePage = () => {
  // const [isAuth, setIsAuth] = useState(false)
  // const navigate = useNavigate()
  //
  // useEffect(() => {
  //   if (!isAuth) navigate('/register')
  // }, [])



  return <Navigate to='/login' />
}

export default HomePage