import React from 'react'

export default function FTCPostWrapper({children}: {children:React.ReactNode}) {
  return (
    <div className='component-container flex justify-center w-full flex-row gap-6'>
          {children}
    </div>
  )
}
