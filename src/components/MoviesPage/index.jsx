import { GET_ALL_MOVIES } from "@/core/data/apiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";

function MoviePage({ movieID }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(`${GET_ALL_MOVIES}/${movieID}`).then((response) => {
      setMovie(response.data.movie);
    });
  }, []);
  console.log(movie);
  return (
    <div className="w-full h-full">
      <img
        className=" sm:block absolute w-full h-full object-cover"
        src={movie.image}
        alt={movie.title}
        width={1000}
        height={1000}
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed w-full h-full px-4 py-6 sm:w-full z-50">
        <div className="max-w-[450px] max-h-[850px] my-24 mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] py-8 mx-auto">
            <h1 className="text-3xl font-bold px-1">{movie?.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
