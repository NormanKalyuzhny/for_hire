import React, { useEffect, useRef, useState } from 'react'
import ghostHappyGif from '../assets/img/GhostHappy.gif'
import ghostScaredGif from '../assets/img/GhostScared.gif'

const Ghost: React.FC = () => {
  const [coordinates,setCoordinates] = useState<{bottom?:number,left:number,top?:number}>({top:350, left:0})
  const [isScared,setIsScared] = useState<boolean>(false)
  const [transitionTime,setTransitionTime] = useState<number>(0.5)
  const [rndVectorInterval, setRndVectorInterval] = useState<number | undefined>(undefined)
  const ghostRef = useRef<HTMLDivElement | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const vectorRef = useRef<{x:number,y:number}>({x:0, y:0})
  const [divVisible, setDivVisible] = useState<boolean>(true);

  if (timerRef.current !== null){
    clearTimeout(timerRef.current)
  }

  useEffect(()=>{
    const screenSize = window.innerWidth
    console.log('asdsad',screenSize) 
    if(screenSize <= 400){
      setDivVisible(false)
    } else {setDivVisible(true)}
  },[])

  useEffect(()=>{
    if(ghostRef.current){
      const rect = ghostRef.current.getBoundingClientRect()
      setCoordinates({
        bottom:rect.bottom,
        left:rect.left,
        top:rect.top,
      })
      console.log(coordinates)
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
    const intervalId = setInterval(() => handleRndVector(), 200) as unknown as number;
    setRndVectorInterval(intervalId)
    setIsScared(true)
    if(ghostRef.current){
      ghostRef.current.style.opacity = "0.5";
    }
  }

  const handleMouseOut = () => {
    clearInterval(rndVectorInterval)
    timerRef.current = setTimeout(()=>{
      if(ghostRef.current){
        ghostRef.current.style.opacity = "1";
      }
      setIsScared(false)
      setTransitionTime(2)
      setCoordinates({
        bottom: 200, 
        left: 30,
      });
    },2000)
  }

  return (
    divVisible ? (
    <div
      className='absolute flex flex-center w-[200px] h-[200px] transition-position ease-out cursor-pointer z-50 drop-shadow-[0_0_5px_#52c7c7] rounded-full p-[3rem]'
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseOut}
      ref={ghostRef} 
      id='ghostDiv'
      style={{
        bottom: `${coordinates.bottom}px`,
        left: `${coordinates.left}px`,
        transitionDuration:`${transitionTime}s`,
      }} 
    >
  
    {!isScared &&
      <img src={ghostHappyGif} alt="ghost" className='pixelated'/>
    }
    {isScared &&  
      <img src={ghostScaredGif} alt="ghost" className='pixelated'
      />
    }
    </div>
  ) : null
  )
}

export default Ghost