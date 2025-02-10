import React from 'react'

export default function FTCPostWrapper({children}: {children:React.ReactNode}) {
  return (
    <div className='component-container flex gap-10'>
          {children}
    </div>
  )
}
