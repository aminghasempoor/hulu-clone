import React, { useEffect, useState } from "react";
import Request from "@/core/utils/Requests";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(Request.RequestAction).then((response) => {
      setMovies(response);
    });
  }, []);
  console.log(movies);
  return <div></div>;
}

export default Main;
