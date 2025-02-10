import React from 'react'

export default function FTCPostWrapperSingle({children}: {children:React.ReactNode}) {

  return (
    <div className='flex flex-col justify-between'>
          {children}
    </div>
  )
}
