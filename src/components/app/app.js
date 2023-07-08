import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/home-page/home-page'
import RegisterPage from '../../pages/register-page/register-page'
import LoginPage from '../../pages/login-page/login-page'
import NotFoundPage from '../../pages/not-found-page/not-found-page'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
