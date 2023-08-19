import MoviePage from "@/components/MoviesPage";
import React from "react";

function movie(props) {
  return (
    <div>
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
