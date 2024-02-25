import React from "react";
import { useSelector } from "react-redux";
import { baseImgUrl } from "../constants";
const Hero = () => {
  const store = useSelector((store) => store.movieReducer);

  const i = Math.floor(Math.random() * 20);

  const randomMovie = store.popularMovies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-4 ">
      {!randomMovie ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <div className="flex flex-col gap-3 items-center justify-between">
            <h1 className="text-3xl font-bold">{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p>
              <span>IMDB: </span>
              <span className="text-yellow-500">
                {randomMovie.vote_average.toFixed(1)}
              </span>
            </p>
            <div className="flex gap-5">
              <button className="p-2 bg-red-600 rounded hover:bg-red-700">
                Filmi İzle
              </button>
              <button className="p-2 bg-blue-600 rounded hover:bg-blue-700">
                Listeye Ekle
              </button>
            </div>
          </div>
          <div>
            <img
              className="my-4 img-fluid rounded hero-img"
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
