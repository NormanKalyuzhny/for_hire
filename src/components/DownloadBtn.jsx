import React from "react";

export default function DownloadBtn() {
  const handleDownload = () => {
    window.location.href = "";
  };

  return (
    <div>
      <button 
        className="download-btn btn-d-color flex-center-all w-[110px] h-[40px] rounded-[0.5rem] text-[1rem] text-white font-semibold disabled:bg-container disabled:border-b-gray-500 disabled:cursor-not-allowed"
        onClick={handleDownload} >Download
      </button>
    </div>
  );
}