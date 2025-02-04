import { useTranslation } from "react-i18next"
export default function Footer({setIsAboutVisible, setIsContactVisible}){
  const {t} = useTranslation(['about','contactForm'])

    const handleVisibilityAbout = () => {
        setIsAboutVisible(prev => !prev)
        setIsContactVisible(false)
    }
    const handleVisibilityContact = () => {
        setIsContactVisible(prev => !prev)
        setIsAboutVisible(false)
    }

    return(
      <footer className='w-full color-white pl-2 sm:px-4'>
        <div className='flex items-center min-h-[4rem] max-h-[75px]'>
          <div className='flex max-w-[200px] sm:max-w-full'>
            <p>&copy; {new Date().getFullYear()} Norman Kalyuzhny. All rights reserved.</p>
          </div>
          <nav className='flex ml-auto '>
            <ul className='footer-btns flex '>
              <li className=''>
                <button 
                  onClick={handleVisibilityAbout}
                  className='uppercase border-2 border-transparent sm:py-1 px-2 hover:btn-header-active text-nowrap'>{t('btnAbout')}
                </button>
              </li>
              <li className='' id="open-modal-link">
                <button
                  onClick={handleVisibilityContact} 
                  className='uppercase border-2 border-transparent sm:py-1 px-2 hover:btn-header-active'>{t('contactForm:btnContact')}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
}