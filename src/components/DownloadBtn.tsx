import { useTranslation } from "react-i18next";
export default function DownloadBtn() {
  const {t} = useTranslation('btnDownload')
  
  const handleDownload = () => {
    window.location.href = "https://www.dropbox.com/scl/fi/7iwqezxnbo5lymhd0cmsw/FlipTheCard.apk?rlkey=f039523uhejhwkne8rw48ri5x&st=hvpqggcj&dl=0";
  };

  return (
    <div>
      <button 
        className="download-btn btn-d-color flex-center-all w-[110px] h-[40px] rounded-[0.5rem] text-[1rem] text-white font-semibold disabled:bg-container disabled:border-b-gray-500 disabled:cursor-not-allowed"
        onClick={handleDownload} >{t('btnD')}
      </button>
    </div>
  );
}