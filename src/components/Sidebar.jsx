import ContentVisibility from './ContentVisibility'

export default function Sidebar({setIsSidebarVisible,isSidebarVisible,setIsAppContentVisible }) {
  
  return (
    <>
      <button onClick={()=>setIsSidebarVisible(prev => !prev)} className='burgerMenu vsm:hidden cursor-pointer' 
      aria-label="Open menu"
      id='burgerBtn'>
        <svg
          className='burger-icon'
          width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 18L20 18" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12L20 12" stroke="hsl(39, 100.00%, 70.40%)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 6L20 6" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
       
      <div className={`${!isSidebarVisible ? 'h-[0px] py-0':''} absolute gap-2 h-[64px] py-2 transition-all duration-300 ease-in-out w-full bg-modal shadow-container backdrop-blur-xl top-[80px] z-50 flex right-0 justify-center vsm:rounded-xl px-4 overflow-hidden` }>
        <ContentVisibility setIsAppContentVisible={setIsAppContentVisible} setIsSidebarVisible={setIsSidebarVisible}/>
      </div>
    </>
  )
}