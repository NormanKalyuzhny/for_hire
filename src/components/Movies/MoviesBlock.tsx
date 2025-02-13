import { useState } from 'react';
import MoviesFilter from './MoviesFilter';
import MoviesData from './MoviesData';
export default function MoviesBlock() {
  const [query, setQuery] = useState<string>("");
  const [isTagSelected, setIsTagSelected] = useState<string[]>([])

  return (
    <div className='flex flex-col'>
      <MoviesFilter 
        setQuery={setQuery}
        setIsTagSelected={setIsTagSelected}
        isTagSelected={isTagSelected} query={query}/>
      <MoviesData 
        query={query}
        isTagSelected={isTagSelected}
      />
    </div>
  );
}