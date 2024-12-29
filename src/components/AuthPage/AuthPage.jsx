import React, { useState } from 'react';
import LoginForm from './LoginForm'; // Импорт компонентов
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import './AuthorizationForm.css'; // Стили для анимации

const AuthPage = () => {
  const [formState, setFormState] = useState('login');
  const [isAnimating, setIsAnimating] = useState(false); // Состояние для анимации
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSwitchForm = (state) => {
    setIsAnimating(true); // Начинаем анимацию
    setIsDisabled(true)
    setTimeout(() => {
      setFormState(state); // Меняем форму после завершения анимации
      setIsAnimating(false); // Завершаем анимацию
      setIsDisabled(false)
    }, 300); // Задержка, соответствующая времени анимации
  };

  

  return (
    <div className="auth-container">
      {formState === 'login' && (
        <div className={`form-container ${isAnimating ? 'animate-left' : ''}`}>
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
