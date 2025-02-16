import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import { useEffect, useRef, useState } from "react";

export default function MusicList() {
  const songsList = useQuery(api.musicData.listAllFiles);
  const audioMetadata = useQuery(api.audioMetadata.get);
  const [currentAudio, setCurrentAudio] = useState<{
    id: Id<"_storage">,
    currentTime: number,
    duration: number
  } | null>(null);

  if (songsList === undefined || audioMetadata === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {songsList.map((item, index) => {
        const metadata = audioMetadata[index];
        return (
          <div key={item._id} className="flex flex-col">
            <section className="flex mb-2">
              <AudioItem 
                fileId={item._id}
                isCurrentlyPlaying={currentAudio?.id === item._id}
                onPlay={(duration) => setCurrentAudio({ id: item._id, currentTime: 0, duration })}
                onTimeUpdate={(currentTime) => setCurrentAudio(prev => prev && prev.id === item._id ? { ...prev, currentTime } : prev)}
                onSeek={(time) => setCurrentAudio(prev => prev && prev.id === item._id ? { ...prev, currentTime: time } : prev)}
              />
              {metadata && (
                <div className="bg-container w-[15rem] [&>p]:pl-2">
                  <p className="text-lg"> {metadata.fileName}</p>
                  <p className="text-sm">By: {metadata.artist}</p>
                  {metadata.genre && <p className="text-sm">Genre: {metadata.genre}</p>}
                  {metadata.year && <p className="text-sm">Year: {metadata.year}</p>}
                </div>
              )}
            </section> 
            {currentAudio && currentAudio.id === item._id && (
              <div className="py-1">
                <div className="time-display flex justify-end">
                  {Math.floor(currentAudio.currentTime)} / {(currentAudio.duration/60).toFixed(2)}
                </div>
                <input
                  className="w-full appearance-none rounded-sm h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[16px] [&::-webkit-slider-thumb]:w-[16px] [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:bg-[#dd7d00] [&::-webkit-slider-thumb]:cursor-pointer" 
                  type="range" 
                  min="0" 
                  max={currentAudio.duration} 
                  value={currentAudio.currentTime} 
                  onChange={(e) => {
                    const newTime = parseFloat(e.target.value);
                    const audioItem = document.querySelector(`[data-file-id="${item._id}"]`) as HTMLElement;
                    
                  }} 
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function AudioItem({ fileId, isCurrentlyPlaying, onPlay, onTimeUpdate,onSeek}: { 
  fileId: Id<"_storage">;
  isCurrentlyPlaying: boolean;
  onPlay: (duration: number) => void;
  onTimeUpdate: (currentTime: number) => void;
  onSeek: (time: number) => void;
}) {
  const url = useQuery(api.musicData.getFileUrl, { fileId });
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(90);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (url === undefined) {
    return <div>Loading URL...</div>;
  }

  const togglePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      onPlay(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      onTimeUpdate(audioRef.current.currentTime);
    }
  };

  const handleSeek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      onSeek(time);
    }
  };

  return (
    <div className="">
      <audio 
        ref={audioRef} 
        onEnded={togglePlay}
        onPlay={handlePlay}
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={url || ""} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        
      <div className="bg-gray-700 flex flex-center p-3 ">
        <button
          id="play"
          className="flex flex-center w-[4rem] h-[4rem] action-btn action-btn-big border-[2px] border-[#dd7d00] rounded-full text-[#dd7d00] text-2xl"
          onClick={togglePlay}
        >
          <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play ml-1'}`}></i>
        </button>
      </div>
    </div>
  );
} 