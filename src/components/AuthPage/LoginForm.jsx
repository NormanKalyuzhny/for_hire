import React from 'react'
import './AuthorizationForm.css'

export const LoginForm = ({ onSwitchForm }) => {
  return (
    <div className='container-login'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <i className="fa-solid fa-user"></i>
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <i className="fa-solid fa-lock"></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" name="" id="" /> Remember me
              </label>
             <p> <button onClick={() => onSwitchForm('forgot')}> Forgot password?</button></p>
            </div>
            <button type="submit" className='btn'>Login</button>
            <div className="register-link"></div>
            <p>Don't have an account? <button onClick={() => onSwitchForm('register')} >Register</button> </p>
        </form>
    </div>
  )
}