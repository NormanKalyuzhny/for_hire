import React, { useRef } from 'react';
import brandLogo from '../../assets/svg/MyLogoNK.svg';
import DarkMode from '../DarkMode/DarkMode';
import useLocalStorage from 'use-local-storage';
import Sidebar from '../Sidebar';
import ContentVisibility from '../ContentVisibility';

import LanguageSelector from '../LanguageSelector';
import { useTranslation } from 'react-i18next';

export default function Header({ setIsAppContentVisible }) {
  const [isDark, setIsDark] = useLocalStorage('isDark',false); 
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(false)
  const toggleRef = useRef();

  const handleThemeChange = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  const { i18n } = useTranslation();
  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };


  return (
    <header className='my-[1rem] w-full h-[60px] flex items-center '>
      <div className='w-full'>
        <div className='flex items-center '>
          <a href="#" className="logo drop-shadow-lg ">
            <img
              src={brandLogo}
              alt="Brand logo"
              className='flex w-[85px] pl-1 drop-'
            />
          </a>
          <nav className='flex items-center w-full'>
            <div className='flex ml-auto pr-1 gap-1'>
            <LanguageSelector onLanguageChange={handleLanguageChange} />
              <DarkMode 
                ref={toggleRef} 
                isDark={isDark} 
                onChange={handleThemeChange} 
              />
              <div className='vsm:block hidden'>
                <ContentVisibility setIsAppContentVisible={setIsAppContentVisible}/>
              </div>

            </div>
            <div className='vsm:hidden flex'>
              <Sidebar 
                setIsSidebarVisible={setIsSidebarVisible}
                isSidebarVisible={isSidebarVisible}
                setIsAppContentVisible={setIsAppContentVisible}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}