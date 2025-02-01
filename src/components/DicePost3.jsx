import React, { useState } from "react";
import cover1Front from "../assets/img/cover1a.webp"
import cover1Back from "../assets/img/cover1b.jpg"
import cover2Front from "../assets/img/cover2a.webp"
import cover2Back from "../assets/img/cover2b.jpg"
import coverIconFTC from "../assets/img/icoFTC.png"
import coverIconGold from "../assets/img/icoGold.png"
import "./DicePost3.css"

export default function DicePost3() {
const [isCoverVisible, setIsCoverVisible] = useState('coverFTC')
  return (
     <div className="dicePost text-shadow flex justify-between items-center rounded-2xl shadow-container bg-container px-[1rem] py-[0.4rem] w-[530px] mb-10 ">
        <div className="img-container2 min-w-[150px]">
          <div id='coverDefault' className={`card-inner  h-[230px] ${isCoverVisible !== 'coverFTC'? 'hidden': ''}`} >
            <div className="card-front absolute full-size">
              <img srcSet={cover1Front} className="w-full h-full object-contain"/>
            </div>
            <div className="card-back absolute full-size">
              <img srcSet={cover1Back} className="w-full h-full object-contain"/>
            </div>
          </div>
          <div id='coverGold' className={`card-inner h-[230px] ${isCoverVisible !== 'coverGold'? 'hidden': ''}`}>
            <div className="card-front absolute full-size">
              <img srcSet={cover2Front} className="full-size object-contain"/>
            </div>
            <div className="card-back absolute full-size">
              <img srcSet={cover2Back} className="full-size object-contain"/>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-[1rem] h-full justify-center gap-[1rem]">
          <div id="iconsContainer" className="w-[300px] flex gap-[1rem]">
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
          <div className="dicePostText flex w-[300px] text-[1.2rem]" >
              <p> I will be adding new cards covers over time, I will also be optimising and refactoring the code for your better expirience </p>
          </div>
        </div>
    </div>
  );
}