import React from 'react'
import styles from "./DarkMode.module.css"

 const DarkMode = ({handleChange,isChecked}) => {

  return (
    <div className={styles.darkmodeToggle}>
                <input 
                    type='checkbox' 
                    id='darkmode-toggle'
                    className='toggle'
                    onChange={handleChange}
                    checked={isChecked}
                ></input>
                <label htmlFor="darkmode-toggle"></label>
                <div className={styles.backroundColor}></div>
            </div>
    )
}

export default DarkMode