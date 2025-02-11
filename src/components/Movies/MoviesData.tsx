import React from 'react';
import { dataList } from './dataList';

// DataBlock component
type dataBlockProps = {
  name:string;
  year:number;
  rating:number;
  image: string;
  genre: string;
}

const DataBlock = ({ name, year, rating, image, genre }:dataBlockProps) => {
  return (
    <div className=''>
      <div className="movie-card relative flex flex-col full-size vsm:w-[300px] vsm:h-[400px]">
        {image && <img src={image} alt={name} className="movie-image full-size object-cover" />}
      </div>
      <div className='movie-info  flex flex-col flex-center text-center bottom-0 vsm:w-[300px] h-[140px] bg-container text-color p-[0.3rem]'>
          <h3>{name}</h3>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
          <p>Rating: {rating}</p>
        </div>
    </div>
  );
};

type moviesDataProp = {
  query:string;
  isTagSelected:string[];
}

// MovieData component
export default function MoviesData({query, isTagSelected}:moviesDataProp) {
  const filteredData = dataList.filter((data)=>{
    const matchesQuery = query.toLowerCase() === '' || data.name.toLowerCase().includes(query.toLowerCase())
    const matchesTags = isTagSelected.every(tag => data.genre.includes(tag));
    return matchesQuery && matchesTags;
  })

  return (
    <div className="container flex flex-wrap justify-center sm:justify-start items-center gap-[1rem] mt-[1rem] ext-[0.8rem] w-full">
       {filteredData.length === 0 ? (
        <div className="flex text-shadow text-[--text-color] flex-center w-full text-xl flex-grow">No movies found matching your criteria.</div>
      ) : (
        filteredData.map((data, index) => (
          <DataBlock
            key={index}
            name={data.name}
            year={data.year}
            rating={data.rating}
            image={data.image}
            genre={Array.isArray(data.genre) ? data.genre.join(' ') : data.genre}
          />
        ))
      )}
    </div>
  );
}