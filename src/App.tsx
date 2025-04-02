//every page
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

//Localization 
import { useTranslation } from "react-i18next";

//app page
import Marketing from "./components/Marketing/Marketing";
import AppOverview from "./components/AppOverview";
import Notes from "./components/Notes";
import DicePost from "./components/DicePost";
import DicePost3 from "./components/DicePost3";
import FTCPostWrapper from "./FTCPostWrapper";
import FTCPostWrapperSingle from "./FTCPostWrapperSingle";
import Ghost from "./components/Ghost";
import ScrollTopBtn from "./components/ScrollTopBtn";

//other page
import SVGNameAnimation from "./components/SVGNameAnimation/SVGNameAnimation";
import MoviesBlock from "./components/Movies/MoviesBlock";
import { useEffect, useState } from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import DimensionCube from "./components/temp/3D Cube/DimensionCube";
import AuthPage from "./components/temp/AuthPage/AuthPage";
import Card from "./components/temp/Card/Card";
import Circles from "./components/temp/CircleDance/Circles";
import DigitalClock from "./components/DigitalClock";
import APIFetch from "./components/APIFetch";
import ProgressBar from "./components/ProgressBar";
import TypingGame from "./components/TypingGame";

export default function App(): JSX.Element {
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const [isContactVisible, setIsContactVisible] = useState<boolean>(false);
  const [isAppContentVisible,setIsAppContentVisible] = useState<string>('app');
  const { i18n } = useTranslation();
  const {t: tNotes} = useTranslation('notes')
  const {t: tDice} = useTranslation('dicePost')

  useEffect(()=>{
    i18n.changeLanguage(navigator.language.slice(0,2));
  },[])

  return (
    <Wrapper>
      <Marketing/>
      <div className="viewport flex flex-col justify-between items-center min-h-screen w-[1280px] relative px-4 z-10 ">
        <Header setIsAppContentVisible={setIsAppContentVisible}/>
        {isAppContentVisible === 'app' &&(
          <div className='content-app w-full'>
            <div className="main flex items-center flex-col h-full w-full">
              <AppOverview/>
              <FTCPostWrapper>
                <FTCPostWrapperSingle>
                  <Notes 
                    title={tNotes("title_1")}
                    p={tNotes("p_1")}
                  />
                  <DicePost 
                    p={tDice("details1")}
                    src="../src/assets/img/dice-value.jpg"
                  />
                </FTCPostWrapperSingle>
                <FTCPostWrapperSingle>
                  <Notes title={tNotes("title_2")} 
                    p={tNotes("p_2")}/>
                  <DicePost 
                    p={tDice("details2")}
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Android_robot.svg"
                  />
                </FTCPostWrapperSingle>
              </FTCPostWrapper>
              <Notes title={tNotes("title_3")} 
                p={tNotes("p_3")}/>
              <DicePost3/> 
            </div>
          </div>
        )}
        {isAppContentVisible === 'other' &&(
          <div className='content-other flex flex-col flex-grow w-full '>
            <div className="main flex flex-col items-center">
              <SVGNameAnimation isAppContentVisible={isAppContentVisible}/>
              <div className="movie-block flex flex-col items-center h-full w-full">
                <MoviesBlock/>
                <span className="flex gap-4 flex-wrap mt-4 justify-evenly items-center">
                  <APIFetch/>
                  <DigitalClock/>
                  <DimensionCube/>
                  <Circles/>
                  <Card/>
                  <AuthPage/>
                  <ProgressBar/>
                  <TypingGame/>
                  <ScrollTopBtn/>
                </span>
              </div>
            </div>
          </div>
        )}
        {isAppContentVisible === 'music' &&(
          <div className='content-other flex flex-col flex-grow w-full'>
            <div className="main flex flex-col items-center size-full">
            <AudioPlayer/>
            <Ghost/>
            </div>
          </div>
        )}
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