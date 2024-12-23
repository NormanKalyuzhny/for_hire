import React from 'react'
import './AuthorizationForm.css'

 const RegisterForm = ({onSwitchForm }) => {
  return (
    <div className='container-register'>
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <i className="fa-solid fa-user"></i>
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <i className="fa-solid fa-lock"></i>
            </div>

            <div className="input-box">
                <input type="email" placeholder='Email' required/>
                <i className="fa-solid fa-envelope"></i>
            </div>

            <button type="submit" className='btn'>Register</button>
            <div className="register-link"></div>

            <p>Already have an account? <button onClick={() => onSwitchForm('login')} id="btnLink">Login</button> </p>
        </form>
    </div>
  )
}

export default RegisterForm