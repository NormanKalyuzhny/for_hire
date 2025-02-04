import React from "react";
import { useTranslation } from "react-i18next";

export default function DicePost() {
  const {t} = useTranslation('dicePost')
  return (
    <div className="dicePost text-shadow flex justify-between rounded-2xl shadow-container bg-container p-[1rem] w-[530px] transition-all duration-300 ease-in-out gap-4 vsm:gap-0">
      <div className="overflow-hidden rounded-[1rem] min-w-[200px] h-[200px]">
        <img className="full-size object-cover"
          src="https://t3.ftcdn.net/jpg/00/79/09/92/240_F_79099297_Iskkn2BTJEnwtYIJtePnTXURMYfs3tAC.jpg"
          alt="dive value image"
        />
      </div>
      <div className="dicePostText flex w-[300px] text-[1.2rem] pl-[1rem] items-center">
        <p>{t('dicePost')}</p>
      </div>
    </div>
  );
}
