import React from 'react'

export const ForgotPasswordForm = ({onSwitchForm}) => {
  return (
    <div className='container-forgotPassword'>
        <h1>Forgot password</h1>
        <div className="input-box">
            <input type="email" placeholder='Email' required/>
            <i className="fa-solid fa-envelope"></i>
        </div>
        <button type="submit" className='btn'>Submit</button>
        <p><button onClick={() => onSwitchForm('login')} id="btnLink">Go back</button></p>
    </div>
  )
}