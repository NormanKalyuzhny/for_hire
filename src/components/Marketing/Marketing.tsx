import { useAnimate, motion} from 'framer-motion';
import './Marketing.css';
import appImgSide1 from '../../assets/img/AppLogo1Side.png';
import appImgSide2 from '../../assets/img/AppLogo2Side.png';
import appImgSideMiddle from '../../assets/img/AppLogoMiddleSide.png';
import { useEffect, useState } from 'react';

export default function Marketing (): JSX.Element  {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [isSkipped, setIsSkipped] = useState<boolean>(false)

  interface AnimationOptions {
    duration?: number;
    opacity?: number;
    x?: number;
    y?: number;
    scale?: number;
    rotate?: number;
    delay?: number;
  }

  const textSequence: Array<[string, Record<string, any>, AnimationOptions]> = [
    ['#text1', { opacity: 1, x: 20 }, { duration: 1 }],
    ['#text1', { opacity: 0 }, { duration: 1 }],
    ['#text2', { opacity: 1, x: 20 }, { duration: 1 }],
    ['#text2', { opacity: 0 }, { duration: 1 }],
    ['#text3', { opacity: 1, x: 20}, { duration: 2 }],
    ['#text3', { opacity: 0 }, { duration: 0.3 }],
  ];

  const imageAnimations: Array<Array<[string, Record<string, any>, AnimationOptions]>> = [
    [
      ['.img-container', { scale: 0.8 },{}],
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
      <motion.div ref={scope} className='back-layout bg-container w-full h-[100dvh] fixed z-[100] flex flex-center overflow-hidden'>       
        <div className='text-items w-full [&>p]:absolute [&>p]:w-full [&>p]:flex [&>p]:justify-center [&>p]:left-[-20px] text-[3rem] [&>p]:opacity-0'>
          <p id='text1' >the one</p>
          <p id='text2' >and only</p>
          <p id='text3' className='vsm:whitespace-normal text-center'>app you'll ever need</p>
        </div>
        <div className="title absolute top-[-300px] text-3xl">
          <h1>FlipTheCard!</h1>
        </div>
        <div className="shell absolute">
          <div className="relative img-container w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
            <motion.img id="imgSide1" src={appImgSide1} alt="image" />
            <motion.img id="imgSide2" src={appImgSide2} alt="image" />
            <img className=' ' id='imgSideMiddle' src={appImgSideMiddle} alt="image"/>
          </div>
        </div>
        <button onClick={() => setIsSkipped(true)} id='skipBtn' className='opacity-25 hover:opacity-100 cursor-pointer right-0 bottom-0 absolute py-2 px-4 border-none outline-none rounded-tl-md bg-overlay '>Skip</button>
      </motion.div>
    )}
    </>
  );
}