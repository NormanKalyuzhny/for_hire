import React from 'react'
import './AuthorizationForm.css'

 const LoginForm = ({ onSwitchForm, isDisabled }) => {

  const handleSubmit = (e) => {
    e.preventDefault(); // Это предотвращает отправку формы, и перезагрузку страницы
    // Ваш код для обработки данных формы
  };
  
  return (

    <div className='container-login'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required disabled={isDisabled}/>
                <i className="fa-solid fa-user"></i>
            </div>

            <div className="input-box">
                <input type="password" placeholder='Password' required disabled={isDisabled}/>
                <i className="fa-solid fa-lock"></i>
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox"/> Remember me
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

export default LoginForm