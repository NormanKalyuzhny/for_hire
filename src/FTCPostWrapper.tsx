import React from 'react'

export default function FTCPostWrapper({children}: {children:React.ReactNode}) {
  return (
    <div className='w-full flex flex-col min-[800px]:flex-row justify-evenly gap-5'>
      {children}
    </div>
  )
}