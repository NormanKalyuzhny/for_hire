import React from "react"
const ScrollTopBtn:React.FC  = () => {
  const handleTopScroll = () =>{
    window.scrollTo({top:0,behavior:"smooth"})
  };
  return (
    <div 
      onClick={handleTopScroll}
      className="cursor-pointer w-[100px] h-[30px]  z-50   rounded-md bg-container shadow-container hover:w-[150px] transition-all ease-in-out">
        <i className="fa-solid fa-arrows-up-to-line flex flex-center size-full"></i>
    </div>
  );
};
export default ScrollTopBtn