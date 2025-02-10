import { useTranslation } from "react-i18next"
import { AboutVisibility } from "./types"


export default function About({isAboutVisible,setIsAboutVisible}:AboutVisibility){
  const {t} = useTranslation('about')

  const handleCloseBtn = () => {
    setIsAboutVisible(false)
  }

  return (
    <div id='aboutStripe' className={`about-block absolute flex flex-center bottom-0 mb-[64px] w-full sm:w-[540px] min-h-[300px] bg-modal sm:rounded-xl shadow-container backdrop-blur-md ${!isAboutVisible? 'hidden': ''}`}>
      <div id="sectionBlock" className="flex flex-col items-center w-[400px] gap-6">
        <div className='p-[1rem] min-w-[200px]  color-white text-xl'>
         {t('about')}
        </div>
        <button className="text-[1rem] w-20 btn-inactive hover:btn-close-active transition duration-300" onClick={handleCloseBtn}>{t('btnClose')}</button>
      </div>
    </div>
  )
}