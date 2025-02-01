

export default function Footer({setIsAboutVisible, setIsContactVisible}){

    const handleVisibilityAbout = () => {
        setIsAboutVisible(prev => !prev)
        setIsContactVisible(false)
    }
    const handleVisibilityContact = () => {
        setIsContactVisible(prev => !prev)
        setIsAboutVisible(false)
    }

    return(
      <footer className='w-full color-white text-center'>
        <div className='flex items-center min-w-[10rem] min-h-[4rem] max-h-[75px]'>
          <div className='flex ml-[1rem]'>
            <p>&copy; {new Date().getFullYear()} Norman Kalyuzhny. All rights reserved.</p>
          </div>
          <nav className='flex items-center ml-auto pr-[1rem]'>
            <ul className='footer-btns flex'>
              <li className=''>
                <button 
                  onClick={handleVisibilityAbout}
                  className='uppercase border-2 border-transparent py-1 px-2 hover:btn-header-active'>about
                </button>
              </li>
              <li className='' id="open-modal-link">
                <button
                  onClick={handleVisibilityContact} 
                  className='uppercase border-2 border-transparent py-1 px-2 hover:btn-header-active'>contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    )
}