import { useState } from "react";
import { onLanguageChangeProp } from "./types";

export default function LanguageSelector({ onLanguageChange }:onLanguageChangeProp) {
  const [isLang, setIsLang] = useState('en')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLang = event.target.checked ? 'uk' : 'en';
    setIsLang(newLang);
    onLanguageChange(newLang);
  };

  return (
    <div className="flex items-center ">
      <label htmlFor="langToggle" className="lang-label relative w-[55px] h-[30px] vsm:h-[20px] rounded-xl bg-container cursor-pointer flex flex-center overflow-hidden">укр
        <input type="checkbox" id="langToggle" className=" sr-only peer " onChange={handleChange}/>
        <span className="lang-toggle">eng</span>
      </label>
    </div>
  );
}