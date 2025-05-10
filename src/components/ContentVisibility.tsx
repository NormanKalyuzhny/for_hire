import { ContentVisibilityValues } from "./types"

export default function ContentVisibility({setIsAppContentVisible,setIsSidebarVisible}:ContentVisibilityValues) {
  return (
    <>
      <button
        onClick={()=> setIsAppContentVisible('app')}  
        className='uppercase hover:bg-container hover:themed-shadow transition-all duration-300 rounded-[0.3rem] p-[0.4rem_0.5rem]'>app
      </button>
      <button
        onClick={()=> setIsAppContentVisible('other')} 
        className='uppercase hover:bg-container hover:themed-shadow transition-all duration-300 rounded-[0.3rem] p-[0.4rem_0.5rem]'>other
      </button>
      <button
        onClick={()=> setIsAppContentVisible('music')} 
        className='uppercase hover:bg-container hover:themed-shadow transition-all duration-300 rounded-[0.3rem] p-[0.4rem_0.5rem]'>music
      </button>
    </>
  )
}