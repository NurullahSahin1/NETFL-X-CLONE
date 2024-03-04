import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseImgUrl, options } from "../constants";
import Loader from "../components/Loader";
import DetailDisplay from "../components/DetailDisplay";
import millify from "millify";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PlayCard from "../components/PlayCard";
import TrailerPlayer from "../components/TrailerPlayer";

const DetailPage = () => {
  const [movie, setMovie] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits,reviews`,
        options
      )
      .then((res) => setMovie(res.data));
  }, []);

  console.log(movie, "MERHABA");
  return (
    <div>
      {!movie && <Loader />}

      {movie && (
        <div>
          <div className="relative h-[30vh]">
            <img
              className="h-full w-full object-cover object-center "
              src={baseImgUrl + movie.backdrop_path}
            />
            <div className="absolute bg-black inset-0 bg-opacity-50 grid place-items-center">
              <span className="text-3xl font-semibold">{movie.title}</span>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5"></div>
            <div>
              <DetailDisplay title="Kategoriler:" data={movie.genres} />
              <DetailDisplay
                title="Konuşulan Diller:"
                data={movie.spoken_languages}
              />
              <DetailDisplay
                title="Yapımcı Şirketler:"
                data={movie.production_companies}
              />
              <DetailDisplay
                title="Filmin Çekildiği Ülkeler:"
                data={movie.production_countries}
              />
            </div>
            <div>
              <p>{movie.overview}</p>
              <p className="my-4">
                <span>Bütçe: </span>
                <span className="text-green-500">
                  {movie.budget === 0
                    ? "Bilinmiyor"
                    : millify(movie.budget) + "$"}
                </span>
              </p>
              <p className="my-4">
                <span>Gelir: </span>
                <span className="text-green-500">
                  {movie.revenue === 0
                    ? "Bilinmiyor"
                    : millify(movie.revenue) + "$"}
                </span>
              </p>
            </div>
          </div>
          <div>
            <Splide
              options={{
                autoWidth: true,
                gap: "10px",
                rewind: true,
                lazyLoad: true,
              }}
            >
              {movie.credits.cast.map((player) => (
                <SplideSlide>
                  <PlayCard key={player.credit_id} player={player} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
