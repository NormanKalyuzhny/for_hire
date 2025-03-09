import React from "react"
const ScrollTopBtn:React.FC  = () => {
  const handleTopScroll = () =>{
    window.scrollTo({top:0,behavior:"smooth"})
  };
  return (
    <button 
      onClick={handleTopScroll}
      className="cursor-pointer w-[100px] h-[30px] rounded-md bg-container shadow-container hover:w-[150px] transition-all ease-in-out"
      aria-label="scroll up"
    >
      <i className="fa-solid fa-arrows-up-to-line flex flex-center size-full"></i>
    </button>
  );
};
export default ScrollTopBtn