import React from 'react'
import appWide from '../assets/img/appTopImg.webp'
import DownloadBtn from './DownloadBtn'

export default function AppTopImage() {

  return (
    <div className='top-container relative flex justify-center max-w-full min-w-[730px] h-500 text-4xl rounded-2xl text-shadow'>

      <div className="text-container flex flex-col justify-center p-4 min-w-[280px] text-left mr-10 z-10 mt-[4rem]">
        <h3>FlipTheCard</h3><br/>
        <ul className='text-2xl list-disc ml-7'>
          <li>No Ads</li>
          <li>No AI</li>
          <li style={{listStyleType:"circle"}}>No collection of personal data</li>
          <li>Colorful card covers</li>
          <li>Awesome themes</li>
        </ul>
        <div className='flex justify-center py-5 mb-2'><DownloadBtn/></div>
        <li className='text-sm' style={{listStyleType:"circle"}}>Device information can be collected when sending a bug report</li>
      </div>
      <div  className='flex flex-shrink-0 w-fit z-10'>
        <img src={appWide}  alt="app photo" className="full-size object-contain"/>
      </div>
      <div className='flex absolute w-full h-[430px] bottom-0 rounded-2xl shadow-container bg-container'></div>
    </div>
  )
}