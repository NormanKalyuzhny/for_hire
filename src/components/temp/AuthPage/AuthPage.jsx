import React, { useState } from 'react';
import LoginForm from './LoginForm'; 
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import './AuthorizationForm.css'; 

const AuthPage = () => {
  const [formState, setFormState] = useState('login');
  const [isAnimating, setIsAnimating] = useState(false); 
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSwitchForm = (state) => {
    setIsAnimating(true); 
    setIsDisabled(true)
    setTimeout(() => {
      setFormState(state); 
      setIsAnimating(false); 
      setIsDisabled(false)
    }, 300);
  };

  return (
    <div className="auth-container py-2 overflow-hidden w-fit h-fit relative bg-container rounded-md">
      {formState === 'login' && (
        <div className={`form-container ${isAnimating ? 'animate-left' : ''} `}>
          <LoginForm onSwitchForm={handleSwitchForm} isDisabled={isDisabled}/>
        </div>
      )}
      {formState === 'register' && (
        <div className={`form-container ${isAnimating ? 'animate-left' : ''}`}>
          <RegisterForm onSwitchForm={handleSwitchForm} isDisabled={isDisabled}/>
        </div>
      )}
      {formState === 'forgot' && (
        <div className={`form-container ${isAnimating ? 'animate-left' : ''}`}>
          <ForgotPasswordForm onSwitchForm={handleSwitchForm} isDisabled={isDisabled}/>
        </div>
      )}
    </div>
  );
};

export default AuthPage;