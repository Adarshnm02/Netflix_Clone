import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import { api_key } from '../utilities/api_key'


function Details() {
  const { id } = useParams();
  const location = useLocation();
  const { movie } = location.state || {};
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    if (movie) {
      const fetchTrailer = async () => {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${api_key}`
        );
        const trailers = response.data.results.filter(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
      };
      fetchTrailer();
    }
  }, [movie]);

  const handlePlayClick = () => {
    setShowTrailer(true);
  };

  const handleCloseClick = () => {
    setShowTrailer(false);
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-screen h-screen text-white">
      {movie ? (
        <>
          <div className="w-screen h-screen relative">
            <div className="absolute w-full h-screen bg-gradient-to-r from-black"></div>
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="absolute w-full top-[20%] p-4 md:p-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-10">
                {movie.title}
              </h1>
              <div className="my-4 mb-6">
                <button
                  className="border bg-gray-300 text-black border-gray-300 py-2 px-5"
                  onClick={handlePlayClick}
                >
                  Play
                </button>
                <button className="border text-white border-gray-300 py-2 px-5 ml-4">
                  Watch Later
                </button>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Released: {movie.release_date}
              </p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                {truncateString(movie.overview, 500)}
              </p>
            </div>
          </div>
          {showTrailer && trailerKey && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75">
              <div className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 aspect-w-16 aspect-h-9">
                <button
                  className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2"
                  onClick={handleCloseClick}
                >
                ✖
                </button>
                <YouTube videoId={trailerKey} className="w-full h-full" />
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Details;
