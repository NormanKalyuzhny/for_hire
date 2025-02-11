import React from "react"
const ScrollTopBtn:React.FC  = () => {
  const handleTopScroll = () =>{
    window.scrollTo({top:0,behavior:"smooth"})
  };
  return (
    <div 
      onClick={handleTopScroll}
      className="cursor-pointer w-[50px] h-[50px] m-4 absolute z-50 right-0 bottom-0 rounded-full bg-container shadow-container ">
        <p className="flex flex-center size-full">UP</p>
    </div>
  );
};
export default ScrollTopBtn