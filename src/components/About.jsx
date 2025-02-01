
export default function About({isAboutVisible,setIsAboutVisible}) {

  const handleCloseBtn = () => {
    setIsAboutVisible(false)
  }

  return (
    <div id='aboutStripe' className={`about-block absolute flex flex-center bottom-0 mb-[64px] w-full sm:w-[540px] min-h-[300px] bg-modal rounded-xl shadow-container ${!isAboutVisible? 'hidden': ''}`}>
      <div id="sectionBlock" className="flex flex-col items-center w-[400px] gap-6">
        <div className='p-[1rem] min-w-[200px]  color-white text-xl'>
          Artist, composer, QA specialist and apprentice in a new profession such as Front-End Developer
          I don't like AI, but I can't deny the potential benefits it brings.
        </div>
        <button className="text-[1rem] w-20 btn-inactive hover:btn-close-active transition duration-300" onClick={handleCloseBtn}>Close</button>
      </div>
    </div>
  )
}