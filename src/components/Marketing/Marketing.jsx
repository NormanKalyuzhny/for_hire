import { useAnimate, motion} from 'framer-motion';
import './Marketing.css';
import appImgSide1 from '../../assets/img/AppLogo1Side.png';
import appImgSide2 from '../../assets/img/AppLogo2Side.png';
import appImgSideMiddle from '../../assets/img/AppLogoMiddleSide.png';
import React, { useEffect, useState } from 'react';

export default function Marketing() {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(true)
  const [isSkipped, setIsSkipped] = useState(false)

  const textSequence = [
    ['#text1', { opacity: 1, x: 20 }, { duration: 2 }],
    ['#text1', { opacity: 0 }, { duration: 1 }],
    ['#text2', { opacity: 1, x: 20 }, { duration: 2 }],
    ['#text2', { opacity: 0 }, { duration: 1 }],
    ['#text3', { opacity: 1, scale: 1.2 }, { duration: 2 }],
    ['#text3', { opacity: 0 }, { duration: 0.3 }, {transition: "spring", stiffness: 100}],
  ];

  const imageAnimations = [
    [
      ['.img-container', { scale: 0.8 }],
      ['#imgSide1', { x: 2948 }, { duration: 0.3}],
      ['#imgSideMiddle',{x:-2999, y:2999}, { duration: 0.4}],
      ['#imgSide2', { x: -2948 }, { duration: 0.3}],
      ['.title', {y:400}, { duration: 0.3, }],
    ],
    [
      ['.img-container', {rotate: 8}, { duration: 0.3, delay: 0.05  }],
      ['#imgSide1', { x: 2999, y: -51 }, { duration: 0.3, delay: 0.05  }],
      ['#imgSide2', { x: -2999, y: 51 }, { duration: 0.3, delay: 0.05  }],
    ],
  ];

  useEffect(() => {
    const animateText = async () => {
      for (const [selector, animation, options] of textSequence) {
        await animate(selector, animation, options);
      }
    };

    const animateImages = async () => {
      for (const animations of imageAnimations) {
        const animationPromises = animations.map(([selector, animation, options]) =>
          animate(selector, animation, options)
        );
        await Promise.all(animationPromises);
      }
    };

    const runAnimations = async () => {
      if(!isSkipped){
        await animateText(); 
        await animateImages();
        await animate(scope.current, { y: -2999 }, { duration: 1.3, delay: 1.5 });    
      }
      setIsVisible(false)
    };

    runAnimations().catch(err => console.error(err));
  }, [animate,scope,isSkipped]);

  return (
    <>
    {isVisible && (
      <motion.div ref={scope} className='back-layout'>       
        <div className='text-items'>
          <p id='text1'>the one</p>
          <p id='text2'>and only</p>
          <p id='text3'>app you'll ever need</p>
        </div>
        <div className="title">
          <h1>FlipTheCard!</h1>
        </div>
        <div className="shell">
          <div className="img-container">
            <motion.img id="imgSide1" src={appImgSide1} alt="image" />
            <motion.img id="imgSide2" src={appImgSide2} alt="image" />
            <img id='imgSideMiddle' src={appImgSideMiddle} alt="image" />
          </div>
        </div>
        <button onClick={() => setIsSkipped(true)} id='skipBtn'>Skip</button>
      </motion.div>
    )}
    </>
  );
}