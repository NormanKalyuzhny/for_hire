import React from "react";

export default function DownloadBtn() {
  const handleDownload = () => {
    window.location.href = "https://drive.usercontent.google.com/uc?export=download&id=1r-G6svfkCu9V_3IPGe7HjVi-f2L4pKYH";
  };
//https://drive.usercontent.google.com/uc?id=1r-G6svfkCu9V_3IPGe7HjVi-f2L4pKYH&export=download
  return (
    <div>
      <button 
        className="download-btn flex items-center justify-center w-[110px] h-[40px] rounded-[0.5rem] text-[1rem] font-semibold"
        onClick={handleDownload}>Download</button>
    </div>
  );
}