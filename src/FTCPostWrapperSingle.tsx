import React from 'react'

export default function FTCPostWrapperSingle({children}: {children:React.ReactNode}) {

  return (
    <div className='w-full flex flex-col items-center justify-between'>
          {children}
    </div>
  )
}