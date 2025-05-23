import cover1Front from "../assets/img/cover1a.webp"
import cover1Back from "../assets/img/cover1b.jpg"
import cover2Front from "../assets/img/cover2a.webp"
import cover2Back from "../assets/img/cover2b.jpg"
import coverIconFTC from "../assets/img/icoFTC.png"
import coverIconGold from "../assets/img/icoGold.png"
import { useTranslation } from "react-i18next";
import "./DicePost3.css"
import { useState } from "react"

export default function DicePost3() {
const [isCoverVisible, setIsCoverVisible] = useState('coverFTC')
const {t} = useTranslation('dicePost3')
  return (
     <div className="dicePost3 text-shadow flex justify-between items-center rounded-2xl shadow-container bg-container px-[1rem] w-full vsm:w-[530px] flex-col vsm:flex-row mb-4 transition-all ease-in-out">
        <div className="img-container2 w-full py-4">
          <div id='coverDefault' className={`card-inner h-[290px] vsm:h-[230px] ${isCoverVisible !== 'coverFTC'? 'hidden': ''}`} >
            <div className="card-front absolute full-size">
              <img srcSet={cover1Front} className="mycard w-full h-full object-contain" alt="On the front cover is a picture of a dragon"/>
            </div>
            <div className="card-back y-180deg backface-hidden absolute full-size">
              <img srcSet={cover1Back} className="mycard w-full h-full object-contain"/>
            </div>
          </div>
          <div id='coverGold' className={`card-inner h-[290px] vsm:h-[230px] ${isCoverVisible !== 'coverGold'? 'hidden': ''}`}>
            <div className="card-front absolute full-size">
              <img srcSet={cover2Front} className="full-size object-contain" alt="On the front cover is a picture of dice"/>
            </div>
            <div className="card-back y-180deg backface-hidden absolute full-size">
              <img srcSet={cover2Back} className="full-size object-contain"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col vsm:pl-[1rem] h-full justify-center vsm:gap-[1rem]">
          <div id="iconsContainer" className="w-full vsm:w-[300px] flex gap-[1rem] justify-center vsm:justify-start">
            <button 
              id="iconFtc" 
              className="w-[60px] h-[60px] rounded-[1rem] overflow-hidden cursor-pointer"
              onClick={()=>setIsCoverVisible('coverFTC')}
            >
              <img srcSet={coverIconFTC} alt="icon" className="full-size"/>
            </button>
            <button 
              id="iconGold" 
              className="w-[60px] h-[60px] rounded-[1rem] overflow-hidden cursor-pointer"
              onClick={()=>setIsCoverVisible('coverGold')}
            >
              <img srcSet={coverIconGold} alt="icon" className="full-size"/>
            </button>
          </div>
          <div className="dicePostText flex w-[300px] text-[1.2rem] py-4 vsm:py-0"  >
              <p>{t('dicePost3')}</p>
          </div>
        </div>
    </div>
  );
}