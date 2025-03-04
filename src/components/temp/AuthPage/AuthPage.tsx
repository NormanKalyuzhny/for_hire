import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm'; 
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import './AuthorizationForm.css'; 

const AuthPage = () => {
  const [formState, setFormState] = useState<string>('login');
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [translateXPos,setTranslateXPos] = useState<string>('')
  const [formHeight, setFormHeight] = useState<string>('')

  const handleSwitchForm = (state: React.SetStateAction<string>) => {
    setIsDisabled(true)
    setTimeout(() => {
      setFormState(state); 
      setIsDisabled(false)
    }, 100);
  };

  useEffect(()=>{
    switch (formState){
      case('register'):
        setTranslateXPos('-translate-x-[700px]')
        setFormHeight('')
        break;
      case('login'):
        setTranslateXPos('')
        setFormHeight('h-[200px]')
        break;
      case('forgot'):
        setTranslateXPos('-translate-x-[350px]')
        setFormHeight('h-[150px]')
        break;
    }
  },[formState])

  return (
    <div className={`flex w-[350px] ${formHeight} overflow-hidden bg-container shadow-container py-2 transition-all rounded-md`}>
      <div className={`relative absolute flex items-center ${translateXPos} transition-all duration-500`}>
        <div className=''>
          <LoginForm onSwitchForm={handleSwitchForm} isDisabled={isDisabled}/>
        </div>
        <div className='translate-x-[350px]'>
          <RegisterForm onSwitchForm={handleSwitchForm} isDisabled={isDisabled}/>
        </div>
        <div className='-translate-x-[350px]'>
          <ForgotPasswordForm onSwitchForm={handleSwitchForm} isDisabled={isDisabled}/>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;