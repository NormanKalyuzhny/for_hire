import { useTranslation } from "react-i18next";

export default function DicePost({src,p}:{src:string, p:string}) {
  const {t} = useTranslation('dicePost')
  return (
    <div className="bg-container shadow-container max-w-[530px] p-4 flex flex-col min-[430px]:flex-row items-center rounded-xl gap-4">
      <div className="flex flex-shrink-0 overflow-hidden rounded-[1rem] min-w-[200px] h-[200px] ">
        <img className="full-size object-contain"
          src={src}
          alt="dive value image"
          width={200}
          height={200}
        />
      </div>
      <div className="max-w-full flex max-h-[190px] min-w-[120px]">
        <p>{p}</p>
      </div>
    </div>
  );
}