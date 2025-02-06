import React, { useState } from 'react';
import MoviesFilter from './MoviesFilter';
import MoviesData from './MoviesData';
export default function MoviesBlock() {
  const [query, setQuery] = useState("");
  const [isTagSelected, setIsTagSelected] = useState([])

  return (
    <div className='flex flex-col'>
      <MoviesFilter 
        setQuery={setQuery} 
        setIsTagSelected={setIsTagSelected}
        isTagSelected={isTagSelected}
      />
      <MoviesData 
        query={query}
        isTagSelected={isTagSelected}
      />
    </div>
  );
}