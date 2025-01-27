
export default function About({isAboutVisible,setIsAboutVisible}) {

  const handleCloseBtn = () => {
    setIsAboutVisible(false)
  }

  return (
    <div id='aboutStripe' className={`about-block absolute flex justify-center items-center bottom-0 mb-[64px] w-full min-h-[300px] backdrop-blur-md bg-overlay z-50 text-shadow ${!isAboutVisible? 'hidden': ''}`}>
      <div id="sectionBlock" className="flex flex-col items-center w-[400px]">
        <div className='p-[1rem] min-w-[200px]  color-white text-xl'>
          The app was created as a portfolio, but now I want to share it with everyone who loves games. 
          I will also be adding more content in the future and refactoring the code to make it cleaner and more stable.
        </div>
        <button className="text-[1rem] w-20 mb-5 rounded-[0.5rem] border-2 border-gray-300/50 text-gray-400 hover:text-gray-300 hover:border-gray-300 transition duration-300" onClick={handleCloseBtn}>Close</button>
      </div>
    </div>
  )
}