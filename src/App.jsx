//every page
import Wrapper from "./components/Wrapper.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

//Localization 
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

//app page
import Marketing from "./components/Marketing/Marketing.jsx";
import AppOverview from "./components/AppOverview.jsx";
import Notes from "./components/Notes.jsx";
import DicePost from "./components/DicePost.jsx";
import DicePost2 from "./components/DicePost2.jsx";
import DicePost3 from "./components/DicePost3.jsx";
import FTCPostWrapper from "./FTCPostWrapper.jsx";
import FTCPostWrapperSingle from "./FTCPostWrapperSingle.jsx";

//other page
import SVGNameAnimation from "./components/SVGNameAnimation/SVGNameAnimation.jsx";
import MoviesBlock from "./components/Movies/MoviesBlock.jsx";

import { useEffect, useState } from "react";

export default function App() {
  const [isAboutVisible, setIsAboutVisible] = useState(false)
  const [isContactVisible, setIsContactVisible] = useState(false)
  const [isAppContentVisible,setIsAppContentVisible] = useState('app')
  const {t, i18n} = useTranslation('notes');

  useEffect(()=>{
    i18n.changeLanguage(navigator.language)
  },[])

  return (
    <Wrapper>
      <Marketing/>
      <div className="viewport flex flex-col justify-between items-center min-h-screen w-[1280px] relative px-4 z-10" >
        <Header setIsAppContentVisible={setIsAppContentVisible}/>
        <div className={`content-app w-full ${isAppContentVisible !== 'app'? 'hidden' : ''}`}>
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
        <div className={`content-other flex flex-col flex-grow w-full ${isAppContentVisible !== 'other' ? 'hidden' : ''}`}>
          <div className="main">
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