import React from "react";
import { useTranslation } from "react-i18next";

export default function DicePost2() {
  const {t} = useTranslation('dicePost2')
  return (
    <div className="dicePost text-shadow flex justify-between rounded-2xl shadow-container bg-container p-[1rem] w-[530px] transition-all ease-in-out gap-4 vsm:gap-0">
      <div className="overflow-hidden rounded-l-[1rem] min-w-[200px] h-[200px]">
        <img className="full-size object-contain"
          srcSet="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
          alt="dive value image"
        />
      </div>
      <div className="dicePostText flex w-[300px] text-[1.2rem] pl-[1rem] items-center">
        <p>{t('dicePost2')}</p>
      </div>
    </div>
  );
}
