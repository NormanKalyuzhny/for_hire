import React from 'react'
import bgImg from '../assets/img/BGImg.png'
export default function Wrapper({children}) {
  return (
    <div className='flex justify-center'>{children}
    </div>
  )
}