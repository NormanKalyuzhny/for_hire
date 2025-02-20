import React, { useEffect, useRef, useState } from 'react'
import ghostHappyGif from '../assets/img/GhostHappy.gif'
import ghostScaredGif from '../assets/img/GhostScared.gif'

const Ghost: React.FC = () => {
  const [coordinates,setCoordinates] = useState<{bottom:number,left:number}>({bottom:200, left:100})
  const [isScared,setIsScared] = useState<boolean>(false)
  const ghostRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const vectorRef = useRef<{x:number,y:number}>({x:0, y:0})
  const [transitionTime,setTransitionTime] = useState<number>(0.5)

  if (timerRef.current !== null){
    clearTimeout(timerRef.current)
  }
   
  useEffect(()=>{
    if(ghostRef.current){
      const rect = ghostRef.current.getBoundingClientRect()
      setCoordinates({
        bottom:rect.bottom,
        left:rect.left,
      })
    }
  },[])

  const handleRndVector = () =>{
    vectorRef.current.x = Math.floor(Math.random()*401) - 50 
    vectorRef.current.y = Math.floor(Math.random()*401) - 50
    setCoordinates({
      bottom: vectorRef.current.x, 
      left: vectorRef.current.y,
    });
  }

  const handleMouseEnter = () =>{
    setTransitionTime(0.5)
    handleRndVector()
    setIsScared(true)
  }

  const handleMouseOut = () => {
    timerRef.current = setTimeout(()=>{
      setIsScared(false)
      setTransitionTime(2)
      setCoordinates({
        bottom: 200, 
        left: 100,
      });
    },2000)
  }

  return (
    <>
      <div
      className='absolute transition-position ease-out w-[100px] h-[100px] cursor-pointer z-50 flex flex-center drop-shadow-[0_0_5px_#52c7c7]'
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseOut}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseOut}
        ref={ghostRef} 
        id='ghostDiv'
        style={{
          bottom: `${coordinates.bottom}px`,
          left: `${coordinates.left}px`,
          transitionDuration:`${transitionTime}s`
        }} 
      >
      {!isScared &&
        <img src={ghostHappyGif} alt="ghost" className='pixelated'/>
      }
      {isScared &&  
        <img src={ghostScaredGif} alt="ghost" className='pixelated'/>
      }
    </div>
    </>
  )
}

export default Ghost