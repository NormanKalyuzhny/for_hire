import React from 'react'

export default function FTCPostWrapper({children}) {
  return (
    <div className='component-container flex gap-10'>
          {children}
    </div>
  )
}
