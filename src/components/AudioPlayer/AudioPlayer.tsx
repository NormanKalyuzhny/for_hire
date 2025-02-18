import { useState, useRef, ChangeEvent, useEffect } from 'react';
import backToBasic from '../../assets/audio/backToBasics.mp3'
import pianoFreePlay from '../../assets/audio/PianoFreeplay.mp3'
import lastDayOfSummer from '../../assets/audio/LastDayOfSummer.mp3'
const hipHopJazzCover = 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84c30be0301d2bfd0a4908a2e4'
const pianoFreePlayCover = 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/84/05/0b/84050b9f-0000-98eb-7ef7-e579576db004/AppIcon-0-0-1x_U007emarketing-0-7-0-sRGB-0-85-220.png/512x512bb.jpg'
const coverPlaceHolder = 'https://banner2.cleanpng.com/20181119/lb/kisspng-clip-art-question-mark-openclipart-vector-graphics-t-vn-gii-p-top-cu-hi-thng-1713920606069.webp'

interface Song {
  title: string;
  src: string;
  cover?: string;
  artist:string;
  genre?:string;
}

const audioData: Song[] = [
  {title:'Back to basics', artist:'Spritu Interiore', genre:'Hip-Hop Jazz', cover:hipHopJazzCover, src:backToBasic},
  {title:'Piano freeplay', artist:'Spritu Interiore', cover:pianoFreePlayCover, src:pianoFreePlay},
  {title:'Last day of summer', artist:'Spritu Interiore', src:lastDayOfSummer},
]

export default function AudioPlayer() {

  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(90);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentSongTitle = audioData[currentSongIndex].title;
  const [isBtnActive, setBtnActive] = useState<boolean>(false)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  if(!audioData[currentSongIndex].cover){
    audioData[currentSongIndex].cover = coverPlaceHolder
  }

  // NEXT SONG
  const nextSong = (): void => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % audioData.length);
  };

  // PREVIOUS SONG
  const prevSong = (): void => {
    const prevIndex = (currentSongIndex - 1 + audioData.length) % audioData.length;
    setCurrentSongIndex(prevIndex);
  };

  // PLAY 
  const togglePlay = (): void => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // PAUSE 
  const togglePause = (): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // STOP
  const toggleStop = (): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }

  // VOLUME CONTROL
  const changeVolume = (e: ChangeEvent<HTMLInputElement>): void => {
    const volumeValue = Number(e.target.value);
    setVolume(volumeValue);
    if (audioRef.current) {
      audioRef.current.volume = volumeValue / 100; // volume range from 0 to 1
    }
  };

  // AUTO PLAYBACK
  const handleEnded = (): void => {
    nextSong();
  };

  return (
    <div className="music-container flex flex-col w-full vsm:w-[250px] h-3/4 vsm:h-fit bg-gray-800 rounded-t-xl justify-between vsm:justify-center" id="music-container">
      <audio
        ref={audioRef}
        src={audioData[currentSongIndex].src}
        id="audio"
        onEnded={handleEnded}
      ></audio>

      <div className="relative absolute flex justify-center h-full p-4 vsm:p-0 vsm:h-[250px] img-container">
        <img 
          src={audioData[currentSongIndex].cover} 
          alt="music-cover" 
          id="cover" 
          className="size-full object-contain rounded-xl p-2"
        />
      </div>
      <section>
        <div className='text-[#dd7d00] py-4 flex flex-center'>{currentSongTitle}</div>
        <div className="navigation flex flex-col h-fit px-4 pb-4">
          <div className="main-btn flex flex-center gap-3">
            <button
              id="prev"
              className="action-btn text-[#dd7d00] cursor-pointer border-[2px] border-[#dd7d00] rounded-full w-[2rem] h-[2rem] hover:border-white hover:text-white"
              onClick={prevSong}
            >
              <i className="fas fa-backward mr-[2px] mt-1"></i>
            </button>

            <button
              id="stop"
              className="action-btn text-[#dd7d00] cursor-pointer  border-[2px] border-[#dd7d00] rounded-full w-[2rem] h-[2rem] hover:border-white hover:text-white"
              onClick={toggleStop}
            >
              <i className="fas fa-stop mt-[5px]"></i>
            </button>

            <button
              id="play"
              className="flex flex-center w-[3rem] h-[3rem] action-btn action-btn-big border-[2px] border-[#dd7d00] rounded-full text-[#dd7d00] text-2xl hover:border-white hover:text-white"
              onClick={togglePlay}
            >
              <i className='fas fa-play ml-1 '></i>
            </button>

            <button
              id="pause"
              className="action-btn text-[#dd7d00] cursor-pointer  border-[2px] border-[#dd7d00] rounded-full w-[2rem] h-[2rem] hover:border-white hover:text-white"
              onClick={togglePause}
            >
              <i className="fas fa-pause mt-[5px]"></i>
            </button>

            <button
              id="next"
              className="action-btn text-[#dd7d00] cursor-pointer flex flex-center border-[2px] border-[#dd7d00] rounded-full w-[2rem] h-[2rem] hover:border-white hover:text-white"
              onClick={nextSong}
            >
              <i className="fas fa-forward flex ml-[2px]"></i>
            </button>
          </div>

          <div className="volume flex items-center mt-[0.5rem] w-full text-[#dd7d00] gap-2">
            <p id="volume_show" className="w-[40px] flex justify-center mt-[2px]">{volume}</p>
            <i className="fa fa-volume-up cursor-pointer" aria-hidden="true" id="volume_icon"></i>
            <input
              className="w-full appearance-none rounded-sm h-2 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[16px] [&::-webkit-slider-thumb]:w-[16px] [&::-webkit-slider-thumb]:rounded-sm [&::-webkit-slider-thumb]:bg-[#dd7d00] [&::-webkit-slider-thumb]:cursor-pointer"
              type="range"
              min="0"
              max="100"
              value={volume}
              id="volume"
              onChange={changeVolume}
            />
          </div>
        </div>
      </section>
    </div>
  );
}