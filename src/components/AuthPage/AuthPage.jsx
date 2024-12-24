import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import './AuthorizationForm.css'

import React, { useState } from 'react'

const AuthPage = () => {
    const [formState, setFormState] = useState('login');
    const handleSwitchForm = (state) => {
        setFormState(state);
    };

  return (
    <div className="auth-container">
        {formState === 'login' && <LoginForm onSwitchForm={handleSwitchForm} />}
        {formState === 'register' && <RegisterForm onSwitchForm={handleSwitchForm} />}
        {formState === 'forgot' && <ForgotPasswordForm onSwitchForm={handleSwitchForm} />}
    </div>
  )
}

export default AuthPage