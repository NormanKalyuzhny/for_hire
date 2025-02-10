import { useState } from 'react'

export default function ComponentBox({children}: {children:React.ReactNode}) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)

  return (
    <div className='relative flex flex-col items-center w-fit'>
      <div onClick={() => setIsCollapsed(prev => !prev)} className='cursor-pointer w-full h-[25px] my-4 bg-container shadow-container rounded-md'>
      <p className='flex items-center justify-center'>Curriculum Vitae</p>
      </div>
      <div className={`flex justify-center w-full overflow-hidden  ${isCollapsed ? 'h-0':'h-auto'} transition-all duration-300 ease-in-out`}>
          {children}
      </div>
    </div>
  )
}