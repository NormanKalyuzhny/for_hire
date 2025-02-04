import React, { useState } from "react";


export default function LanguageSelector({ onLanguageChange }) {
  const [isLang,setIsLang] = useState('en')

  const handleChange = (event) => {
    const newLang = event.target.checked ? 'uk' : 'en';
    setIsLang(newLang);
    onLanguageChange(newLang);
  };

  return (
    <div className="flex items-center ">
      <label htmlFor="langToggle" className="lang-label relative w-[55px] h-[20px] rounded-xl bg-container cursor-pointer flex flex-center overflow-hidden">укр
        <input type="checkbox" id="langToggle" className=" sr-only peer " onChange={handleChange}/>
        <span className="lang-toggle">eng</span>
      </label>
    </div>
  );
}
