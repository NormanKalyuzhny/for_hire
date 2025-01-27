//every page
import Wrapper from "./components/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

//app page
import Marketing from "./components/Marketing/Marketing.jsx";
import AppTopImage from "./components/AppTopImage.jsx";
import Notes from "./components/Notes.jsx";
import DicePost from "./components/DicePost.jsx";
import DicePost2 from "./components/DicePost2.jsx";
import DicePost3 from "./components/DicePost3.jsx";
import FTCPostWrapper from "./FTCPostWrapper.jsx";
import FTCPostWrapperSingle from "./FTCPostWrapperSingle.jsx";

//other page
import SVGNameAnimation from "./components/SVGNameAnimation/SVGNameAnimation.jsx";
import MoviesBlock from "./components/Movies/MoviesBlock.jsx";

import { useState } from "react";

export default function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isContactVisible, setIsContactVisible] = useState(false)
  const [isAppContentVisible,setIsAppContentVisible] = useState(true)

  return (
    <Wrapper>
      <Marketing/>
      <div className="viewport flex flex-col justify-between items-center min-h-screen w-[1280px]" >
        <Header setIsAppContentVisible={setIsAppContentVisible}/>
        <div className={`content-app w-full ${!isAppContentVisible ? 'hidden' : ''}`}>
          <div className="main flex items-center flex-col h-full w-full">
            <AppTopImage/>
            <FTCPostWrapper>
              <FTCPostWrapperSingle>
                <Notes title={'Do you like board games?'} 
                  p={'Now you don\'t have to worry about forgetting your dice!'}/>
                <DicePost/>
              </FTCPostWrapperSingle>
              <FTCPostWrapperSingle>
                <Notes title={'Use it anywhere!'} 
                  p={'Supported by most android devices.'}/>
                <DicePost2/>
              </FTCPostWrapperSingle>
            </FTCPostWrapper>
            <Notes title={'Individuality and self-expression!'} 
              p={'Themes and card covers will emphasize your style!'}/>
            <DicePost3/>
          </div>
        </div>
        <div className={`content-other w-full ${!isAppContentVisible ? '' : 'hidden'}`}>
          <div className="main flex flex-col">
            <SVGNameAnimation/>
            <div className="movie-block flex flex-col items-center h-full w-full">
              <MoviesBlock/>
            </div>
          </div>
        </div>
        <About 
          isAboutVisible={isAboutVisible} 
          setIsAboutVisible={setIsAboutVisible}
        />
        <Contact
          isContactVisible={isContactVisible}
          setIsContactVisible={setIsContactVisible}
        />
        <Footer
          setIsAboutVisible={setIsAboutVisible} 
          setIsContactVisible={setIsContactVisible}
        />
      </div>
    </Wrapper>
  );
}