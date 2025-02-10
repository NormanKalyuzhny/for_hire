import { ContentVisibilityValues } from "./types"

export default function ContentVisibility({setIsAppContentVisible}:ContentVisibilityValues) {
  return (
    <>
      <button
        onClick={()=> setIsAppContentVisible('app')}  
        className='uppercase border-2 border-transparent py-1 px-2 hover:btn-header-active'>APP
      </button>
      <button
        onClick={()=> setIsAppContentVisible('other')} 
        className='uppercase border-2 border-transparent py-1 px-2 hover:btn-header-active'>OTHER
      </button>
    </>
  )
}