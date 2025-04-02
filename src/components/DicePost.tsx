import { useTranslation } from "react-i18next";

export default function DicePost({src,p}:{src:string, p:string}) {
  const {t} = useTranslation('dicePost')
  return (
    <div className="dicePost flex items-center text-shadow rounded-2xl shadow-container bg-container p-[1rem] w-full sm:max-w-[530px] transition-all ease-in-out gap-4 sm:gap-0">
      <div className="flex flex-shrink-0 overflow-hidden rounded-[1rem] min-w-[200px] h-[200px]">
        <img className="full-size object-contain"
          src={src}
          alt="dive value image"
          width={200}
          height={200}
        />
      </div>
      <div className="dicePostText flex justify-center w-[300px] text-[1.2rem] pl-[1rem] items-center">
        <p>{p}</p>
      </div>
    </div>
  );
}