import React, { useState } from 'react'

const Form = ({ title, handleClick }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const inputHandler = () => (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <div className='form-group'>
        <label htmlFor='exampleInputEmail1'>Email address</label>
        <input
          type='email'
          name='email'
          className='form-control'
          placeholder='Enter email'
          value={formData.email}
          onChange={inputHandler()}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'>Password</label>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='Password'
          value={formData.password}
          onChange={inputHandler()}
        />
      </div>

      <button
        className='btn btn-success mb-4 mt-2'
        type='submit'
        onClick={(e) => handleClick(e, formData)}
      >
        {title}
      </button>
    </form>
  )
}

export default Form
