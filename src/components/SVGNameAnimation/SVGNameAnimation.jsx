import "./SVGNameAnimation.css"
import React, { useEffect, useRef, useState } from 'react'
import {useAnimate, motion, AnimatePresence} from 'framer-motion';

export default function SVGNameAnimation({isAppContentVisible}) {
  //full line lenth for letters 
  // const svgName = document.querySelectorAll('.svgName path')
  // for(let i = 0; i < svgName.length; i++){
  //     console.log(`Letter line lenght ${i} is ${svgName[i].getTotalLength()}`)
  // }
  const [scope, animate] = useAnimate();
  const isVisibleRef = useRef(true);
  const [isVisible,setIsVisible] = useState(true)
  const svgElement = document.querySelector('.svgName');
  const svgLetters = [
    { pathIndex: 1, delay: 0, duration: 2 },
    { pathIndex: 2, delay: 0.3, duration: 2 },
    { pathIndex: 3, delay: 0.6, duration: 2 },
    { pathIndex: 4, delay: 0.9, duration: 2 },
    { pathIndex: 5, delay: 1.2, duration: 2 },
    { pathIndex: 6, delay: 1.5, duration: 2 },
    { pathIndex: 7, delay: 1.8, duration: 2 },
  ];

  const createAnimation = ({ pathIndex, delay, duration }) => {
    const animations = [
      // Stroke Dashoffset Animation
      ['.svgName path:nth-child(' + pathIndex + ')', { strokeDashoffset: 0 }, { duration, delay, ease: "easeInOut" }],
      // Fill Animation
      ['.svgName path:nth-child(' + pathIndex + ')', { fill: "white" }, { delay: delay + 2, ease: "easeInOut" }]
    ];
  
    // Fade for first 3 letters
    if (pathIndex <= 3) {
      animations.push(
        ['.svgName path:nth-child(' + pathIndex + ')', { opacity: 0 }, { duration: 1, delay: delay + 3.5, ease: "easeInOut" }],
      );
    }
    return animations;
  };
  
  const handleExitAnimation = () => {
    isVisibleRef.current = false
    setIsVisible(isVisibleRef.current)

  }
  useEffect(() => {
    if (!isVisible){return}
    if (isAppContentVisible === 'other') {
      svgLetters.forEach(letter => {
        createAnimation(letter).forEach(([selector, style, options]) => {
          animate(selector, style, options);
        });
      });
      console.log(isVisible)
    }
  }, [isAppContentVisible, animate, isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className="svg-container flex justify-center w-full" 
        animate={isAppContentVisible === 'other' ? { x: "-10%"} : {}}
        initial={{ opacity: 1 }}
        exit={{y: "-100%", opacity:0}}
        onAnimationComplete={handleExitAnimation}
        transition={{
          x: { delay: 4.5, duration: 0.5, ease: "easeInOut" }, // Delay for x
          y: {  duration: 0.5, ease: "easeInOut" }, // Delay for y
          opacity: { duration: 0.5, ease: "easeInOut" },
        }}
        >  
          <svg
            ref={scope} 
            className="svgName flex flex-shrink-0 w-full h-fit vsm:w-[508px] transition duration-[1s] ease-in-out"
            height="74.701" 
            viewBox="0 0 508.3 74.701" 
            xmlns="http://www.w3.org/2000/svg">
            <g id="svgGroup" 
            strokeLinecap="round" 
            fillRule="evenodd" 
            fontSize="9pt" 
            strokeWidth="0.25mm" 
          >
            <path d="M 91.2 1.601 L 70.8 73.101 L 61.4 73.101 L 45.6 12.501 L 29.8 73.101 L 20.4 73.101 L 0 1.601 L 8.6 1.601 L 25.3 63.101 L 41.4 1.601 L 49.9 1.601 L 66.2 63.601 L 83 1.601 L 91.2 1.601 Z" id="0" 
            vectorEffect="non-scaling-stroke" strokeDasharray = "574" strokeDashoffset = "574" fill="transparent" opacity="1"/>
            <path d="M 151.2 66.101 L 151.2 73.101 L 106.4 73.101 L 106.4 1.601 L 151.2 1.601 L 151.2 8.601 L 114.4 8.601 L 114.4 33.001 L 149.4 33.001 L 149.4 40.001 L 114.4 40.001 L 114.4 66.101 L 151.2 66.101 Z" id="1" 
            vectorEffect="non-scaling-stroke" strokeDasharray = "376" strokeDashoffset = "376" fill="transparent" opacity="1"/>
            <path d="M 209.8 66.001 L 209.8 73.101 L 166.9 73.101 L 166.9 1.601 L 174.9 1.601 L 174.9 66.001 L 209.8 66.001 Z" id="2" 
            vectorEffect="non-scaling-stroke" strokeDasharray = "229" strokeDashoffset = "229" fill="transparent" opacity="1"/>
            <path d="M 271.1 55.601 L 276.7 61.101 A 30.008 30.008 0 0 1 265.647 70.82 A 35.181 35.181 0 0 1 265.2 71.051 Q 258 74.701 250.2 74.701 A 33.319 33.319 0 0 1 239.97 73.158 A 30.719 30.719 0 0 1 236.7 71.901 Q 230.5 69.101 225.85 64.001 Q 221.2 58.901 218.65 52.101 A 40.62 40.62 0 0 1 216.169 39.963 A 47.349 47.349 0 0 1 216.1 37.401 Q 216.1 29.401 218.7 22.601 A 38.021 38.021 0 0 1 224.781 12.002 A 35.916 35.916 0 0 1 225.9 10.701 Q 230.5 5.601 236.8 2.801 Q 243.1 0.001 250.4 0.001 Q 258.6 0.001 265.35 3.501 A 31.168 31.168 0 0 1 276.41 13.191 A 36.324 36.324 0 0 1 276.7 13.601 L 271.1 19.101 A 27.038 27.038 0 0 0 264.843 11.966 Q 258.743 7.201 250.2 7.201 A 23.924 23.924 0 0 0 240.56 9.129 A 23.089 23.089 0 0 0 236.95 11.101 A 26.381 26.381 0 0 0 228.456 20.449 A 31.67 31.67 0 0 0 227.75 21.801 Q 224.4 28.601 224.4 37.401 A 37.888 37.888 0 0 0 225.453 46.492 A 31.686 31.686 0 0 0 227.75 52.851 A 28.147 28.147 0 0 0 232.837 60.183 A 25.305 25.305 0 0 0 236.95 63.601 A 23.321 23.321 0 0 0 250.084 67.501 A 28.018 28.018 0 0 0 250.2 67.501 A 24.597 24.597 0 0 0 258.504 66.124 A 22.732 22.732 0 0 0 262.15 64.451 A 24.389 24.389 0 0 0 269.565 57.844 A 29.873 29.873 0 0 0 271.1 55.601 Z" id="3" 
            vectorEffect="non-scaling-stroke" strokeDasharray = "330" strokeDashoffset = "330" fill="transparent"/>
            <path d="M 310.817 73.286 A 35.142 35.142 0 0 0 320.9 74.701 A 39.344 39.344 0 0 0 322.354 74.674 A 33.887 33.887 0 0 0 334.8 71.901 Q 341.2 69.101 345.95 64.051 Q 350.7 59.001 353.3 52.151 A 38.433 38.433 0 0 0 354.671 47.757 A 43.312 43.312 0 0 0 355.9 37.301 Q 355.9 29.301 353.3 22.501 Q 350.7 15.701 345.95 10.651 Q 341.2 5.601 334.8 2.801 A 32.432 32.432 0 0 0 331.518 1.572 A 35.229 35.229 0 0 0 320.9 0.001 A 39.072 39.072 0 0 0 319.043 0.045 A 33.392 33.392 0 0 0 307.05 2.801 Q 300.7 5.601 295.95 10.651 Q 291.2 15.701 288.6 22.501 Q 286 29.301 286 37.301 A 47.345 47.345 0 0 0 286.091 40.26 A 40.433 40.433 0 0 0 288.6 52.151 A 40.299 40.299 0 0 0 288.765 52.577 A 35.475 35.475 0 0 0 295.95 64.051 Q 300.7 69.101 307.05 71.901 A 31.9 31.9 0 0 0 310.817 73.286 Z M 320.9 67.501 A 27.109 27.109 0 0 0 328.865 66.367 A 23.379 23.379 0 0 0 334.8 63.601 Q 340.8 59.701 344.2 52.851 A 32.615 32.615 0 0 0 347.33 42.056 A 40.865 40.865 0 0 0 347.6 37.301 Q 347.6 28.501 344.2 21.751 A 27.293 27.293 0 0 0 337.512 13.121 A 26.26 26.26 0 0 0 334.8 11.101 A 24.201 24.201 0 0 0 323.559 7.316 A 30.158 30.158 0 0 0 320.9 7.201 A 26.485 26.485 0 0 0 312.589 8.469 A 23.46 23.46 0 0 0 307.1 11.101 A 26.683 26.683 0 0 0 297.915 21.332 A 31.434 31.434 0 0 0 297.7 21.751 A 31.506 31.506 0 0 0 294.702 31.493 A 40.626 40.626 0 0 0 294.3 37.301 A 38.183 38.183 0 0 0 295.26 46.022 A 31.39 31.39 0 0 0 297.7 52.851 A 27.604 27.604 0 0 0 303.442 60.724 A 25.667 25.667 0 0 0 307.1 63.601 Q 313.1 67.501 320.9 67.501 Z" id="4" 
            vectorEffect="non-scaling-stroke" strokeDasharray = "409" strokeDashoffset = "409" fill="transparent"/>
            <path d="M 434.5 13.601 L 410.5 67.001 L 404.6 67.001 L 380.8 13.601 L 380.8 73.101 L 373 73.101 L 373 1.601 L 383.2 1.601 L 407.6 56.901 L 432.2 1.601 L 442.3 1.601 L 442.3 73.101 L 434.5 73.101 L 434.5 13.601 Z" id="5" 
            vectorEffect="non-scaling-stroke" strokeDasharray = "542" strokeDashoffset = "542" fill="transparent"/>
            <path d="M 508.3 66.101 L 508.3 73.101 L 463.5 73.101 L 463.5 1.601 L 508.3 1.601 L 508.3 8.601 L 471.5 8.601 L 471.5 33.001 L 506.5 33.001 L 506.5 40.001 L 471.5 40.001 L 471.5 66.101 L 508.3 66.101 Z" id="6" 
            vectorEffect="non-scaling-stroke" strokeDasharray = "376" strokeDashoffset = "376" fill="transparent"/></g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}