import React from 'react';
import { dataList } from './dataList';

// DataBlock component
const DataBlock = ({ name, year, rating, image, genre }) => {

  return (
    <div>
      <div className="movie-card relative flex flex-col w-[300px] h-[400px]">
        {image && <img src={image} alt={name} className="movie-image full-size object-cover" />}
      </div>
      <div className='movie-info  flex flex-col items-center text-center bottom-0 w-full bg-container text-color p-[0.3rem]'>
          <h3>{name}</h3>
          <p>Year: {year}</p>
          <p>Genre: {genre}</p>
          <p>Rating: {rating}</p>
        </div>
    </div>
  );
};

// MovieData component
export default function MoviesData({query, isTagSelected}) {
  const filteredData = dataList.filter((data)=>{
    const matchesQuery = query.toLowerCase() === '' || data.name.toLowerCase().includes(query.toLowerCase())
    const matchesTags = isTagSelected.every(tag => data.genre.includes(tag));
    return matchesQuery && matchesTags;
  })

  return (
    <div className="container flex flex-wrap justify-start items-center gap-[1rem] mt-[1rem]  text-[0.8rem] w-full">
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