import React from 'react'
import appWide from '../assets/img/pixel3a.webp'
import DownloadBtn from './DownloadBtn'
import { useTranslation } from 'react-i18next'

export default function AppTopImage() {
  const {t} = useTranslation('appOverview')

  return (
    <div className='app-overview relative flex justify-center max-w-[full] min-w-[280px] vsm:min-w-[530px] h-500 text-4xl rounded-2xl text-shadow '>
      <div className='flex justify-center md:gap-20 md:justify-between md:px-10 md:max-w-[850px]'>
        <div className="text-container flex flex-col justify-center p-4 min-w-[280px]  md:max-w-[420px] text-left z-10 mt-[4rem]">
          <h3>FlipTheCard</h3>
          <ul className='text-2xl list-disc ml-7 mt-6'>
            <li>{t('li_1')}</li>
            <li>{t('li_2')}</li>
            <li style={{listStyleType:"circle"}}>{t('li_3')}</li>
            <li>{t('li_4')}</li>
            <li>{t('li_5')}</li>
            <li className='flex justify-center py-5 mb-2'><DownloadBtn/></li>
            <li className='text-sm' style={{listStyleType:"circle"}}>{t('li_6')}</li>
          </ul>
        </div>
        <img src={appWide}  alt="app photo" className="h-full object-contain z-10 rotate-[1deg] hidden sm:block"/>
      </div>

      <div className='flex absolute w-full h-[430px] bottom-0 rounded-2xl shadow-container bg-container'></div>
    </div>
  )
}