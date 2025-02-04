import React from 'react'
import appWide from '../assets/img/AppBackground.webp'
import DownloadBtn from './DownloadBtn'
import { useTranslation } from 'react-i18next'

export default function AppTopImage() {
  const {t} = useTranslation('appOverview')

  return (
    <div className='app-overview relative flex w-[full] min-w-[280px] vsm:w-full sm:h-400 text-4xl rounded-2xl text-shadow rounded-2xl shadow-container bg-container overflow-hidden'>
      <div className='flex size-full'>
        <div className="text-container flex flex-col justify-center px-6 py-4 text-left z-10 bg-container w-full md:w-[460px] transition-all duration-300 ease-in-out">
          <h3>FlipTheCard</h3>
          <ul className='text-xl sm:text-2xl list-disc ml-7 mt-6'>
            <li>{t('li_1')}</li>
            <li>{t('li_2')}</li>
            <li style={{listStyleType:"circle"}}>{t('li_3')}</li>
            <li>{t('li_4')}</li>
            <li>{t('li_5')}</li>
            <li className='flex justify-center py-5 mb-2 mr-5'><DownloadBtn/></li>
            <li className='text-sm' style={{listStyleType:"circle"}}>{t('li_6')}</li>
          </ul>
        </div>
        <div className='absolute min-h-full right-[-25px] top-0 bottom-0'>
          <img src={appWide}  alt="app photo" className="h-full w-full object-none hidden sm:block"/>
        </div>
      </div>     
    </div>
  )
}