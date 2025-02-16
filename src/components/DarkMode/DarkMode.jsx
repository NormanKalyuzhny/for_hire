// DarkMode.jsx
import { useEffect, forwardRef } from 'react';
import styles from './DarkMode.module.css';


const DarkMode = forwardRef(({ isDark, onChange }, ref) => {

  useEffect(() => {
    if (!isDark) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={styles.darkmodeToggle}>
      <input 
        ref={ref}
        type='checkbox' 
        id='darkmode-toggle'
        className='toggle'
        onChange={onChange} 
        checked={isDark}
      />
      <label htmlFor="darkmode-toggle"></label>
      <div className={styles.backgroundColor}></div>
    </div>
  );
});

export default DarkMode;