import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Movie = ({ item, id ,onClick}) => {
  const [like, setLike] = useState(false);
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    console.log(movie)
    navigate(`/details`, { state: { movie } });
  };
  const handleLikeClick = (event) => {
    event.stopPropagation(); 
    setLike(!like);
  };

  return (
    <div onClick={()=>handleMovieClick(item)}
      key={id}
      className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
    >
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={handleLikeClick} className="absolute top-4 left-4">
          {like ? (
            <FaHeart className="text-red-600" />
          ) : (
            <FaRegHeart className="text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
