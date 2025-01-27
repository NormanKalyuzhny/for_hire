import React from 'react'

export default function Wrapper({children}) {
  return (
    <div className='flex justify-center'>{children}</div>
  )
}