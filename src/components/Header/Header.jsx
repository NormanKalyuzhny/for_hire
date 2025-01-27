// Header.jsx
import React, { useRef } from 'react';
import brandLogo from '../../assets/svg/MyLogoNK.svg';
import styles from './Header.module.css';
import DarkMode from '../DarkMode/DarkMode';
import useLocalStorage from 'use-local-storage';

export default function Header({ handleShowSidebar,setIsAppContentVisible }) {
  const [isDark, setIsDark] = useLocalStorage('isDark',false); 
  const toggleRef = useRef();

  const handleThemeChange = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  return (
    <header className='w-full'>
      <div className='pt-[2rem]'>
        <div className='flex items-center max-h-[30px]'>
          <a href="#" className="logo">
            <img
              src={brandLogo}
              alt="Brand logo"
              className='flex items-center w-[85px] pl-1'
            />
          </a>
          <nav className='flex items-center w-full'>
            <div className='flex ml-auto pr-1 gap-1'>
            <DarkMode ref={toggleRef} isDark={isDark} onChange={handleThemeChange} />
              <button
                onClick={()=> setIsAppContentVisible(true)}  
                className='py-[0.3rem] px-[0.4rem] border-2 border-transparent'>APP
              </button>
              <button
                onClick={()=> setIsAppContentVisible(false)} 
                className='py-[0.3rem] px-[0.4rem] border-2 border-transparent'>OTHER
              </button>
            </div>
            <button onClick={handleShowSidebar} className={styles.burgerMenu} aria-label="Open menu">
              <svg
                className='burger-icon'
                width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 12L20 12" stroke="" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 6L20 6" stroke="" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </nav>
        
        </div>
      </div>
    </header>
  );
}