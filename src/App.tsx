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
import DicePost2 from "./components/DicePost2";
import DicePost3 from "./components/DicePost3";
import FTCPostWrapper from "./FTCPostWrapper";
import FTCPostWrapperSingle from "./FTCPostWrapperSingle";
import Ghost from "./components/Ghost";

//other page
import SVGNameAnimation from "./components/SVGNameAnimation/SVGNameAnimation";
import MoviesBlock from "./components/Movies/MoviesBlock";
import { useEffect, useState } from "react";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

export default function App(): JSX.Element {
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const [isContactVisible, setIsContactVisible] = useState<boolean>(false);
  const [isAppContentVisible,setIsAppContentVisible] = useState<string>('app');
  const {t, i18n} = useTranslation('notes');

  useEffect(()=>{
    i18n.changeLanguage(navigator.language.slice(0,2));
  },[])

  return (
    <Wrapper>
      <Ghost/>
      <Marketing/>
      <div className="viewport flex flex-col justify-between items-center min-h-screen w-[1280px] relative px-4 z-10">
        <Header setIsAppContentVisible={setIsAppContentVisible}/>
        {isAppContentVisible === 'app' &&(
          <div className='content-app w-full'>
            <div className="main flex items-center flex-col h-full w-full">
              <AppOverview/>
              <FTCPostWrapper>
                <FTCPostWrapperSingle>
                  <Notes title={t("title_1")} 
                    p={t("p_1")}/>
                  <DicePost/>
                </FTCPostWrapperSingle>
                <FTCPostWrapperSingle>
                  <Notes title={t("title_2")} 
                    p={t("p_2")}/>
                  <DicePost2/>
                </FTCPostWrapperSingle>
              </FTCPostWrapper>
              <Notes title={t("title_3")} 
                p={t("p_3")}/>
              <DicePost3/>
            </div>
          </div>
        )}
        {isAppContentVisible === 'other' &&(
          <div className='content-other flex flex-col flex-grow w-full'>
            <div className="main flex flex-col items-center">
              <SVGNameAnimation isAppContentVisible={isAppContentVisible}/>
              <div className="movie-block flex flex-col items-center h-full w-full">
                <MoviesBlock/>
              </div>
            </div>
          </div>
        )}
        {isAppContentVisible === 'music' &&(
          <div className='content-other flex flex-col flex-grow w-full'>
            <div className="main flex flex-col items-center size-full">
            <AudioPlayer/>
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