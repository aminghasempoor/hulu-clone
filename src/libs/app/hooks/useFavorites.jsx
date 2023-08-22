import { GET_USER_ROUTE } from "@/core/data/apiRoutes";
import axios from "axios";
import useSWR from "swr";
import useUser from "./useUser";

const useFavorites = () => {
  const fetcher = (...args) =>
    axios
      .get(...args, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  const { token } = useUser();
  const { data } = useSWR(GET_USER_ROUTE, fetcher);
  const userFavoriteMovies = data?.favorite_movies;
  //swr config

  // render data
  return { userFavoriteMovies };
};
export default useFavorites;
