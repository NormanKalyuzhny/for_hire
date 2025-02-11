import React from 'react'
import { genres } from './dataList'

type moviesFilterProp = {
  query:string;
  setQuery:React.Dispatch<React.SetStateAction<string>>;
  isTagSelected:string[];
  setIsTagSelected:React.Dispatch<React.SetStateAction<string[]>>;
}

export default function MoviesFilter({query, setQuery, isTagSelected, setIsTagSelected}:moviesFilterProp) {
  const [isTagVisible, setIsTagVisible] = React.useState<boolean>(false)

  const handleCheckboxChange = (genreId:string) => {
    setIsTagSelected(prevSelected => {
      if(prevSelected.includes(genreId)){
        return prevSelected.filter(id => id !== genreId)
      } else {
        return [...prevSelected, genreId]
      }
    })
  };

  return (
    <>
    <div className='container-filter flex w-full min-w-[250px] h-[50px] text-black items-center bg-container shadow-container rounded-lg'>
      <div className='relative flex items-center gap-2 pr-[0.5rem] w-full'>
        <button onClick={()=>setIsTagVisible(prev=>!prev)}><i className="fa-solid fa-sort flex flex-center text-white w-7 h-7 border-2 rounded-xl ml-2"></i></button>
        <input 
          type="text" 
          placeholder='Search by title'
          value={query} 
          onChange={(e) => {
            setQuery(e.target.value);
          }} 
          className=' pl-2 outline-none h-7 rounded-xl w-[120px] focus:placeholder-gray-400/30 focus:w-full sm:focus:w-[400px]  transition-all duration-[0.3s]'/>
      </div>
    </div>
    <div className='flex w-full'>
      <div className={`${!isTagVisible?'hidden':''} absolute mt-[0.3rem] mr-auto text-black flex z-50 max-w-[250px] p-[0.5rem] rounded-lg bg-container`}>
        <div className="genre-filter flex justify-start items-center gap-[0.5rem] flex-wrap">
          {genres.map((genre)=>(
            <div key={genre.id}>
              <input 
                type="checkbox"
                id={genre.id}
                className='hidden peer'
                onChange={() => handleCheckboxChange(genre.id)}
                checked={isTagSelected.includes(genre.id)}
              />
              <label 
                htmlFor={genre.id}
                className='bg-white px-2 py-1 rounded-xl peer-checked:bg-orange-500 peer-checked:text-white cursor-pointer'
              >
                {genre.label} 
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}