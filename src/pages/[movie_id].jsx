import MoviePage from "@/components/MoviesPage";
import TitlePage from "@/core/components/TitlePage";
import React from "react";

function movie(props) {
  return (
    <div>
      <TitlePage text="Movie Detail" />
      <MoviePage movieID={props.movie_id} />
    </div>
  );
}

export default movie;

export async function getServerSideProps(context) {
  const movieID = context.query;
  return {
    props: movieID,
  };
}
