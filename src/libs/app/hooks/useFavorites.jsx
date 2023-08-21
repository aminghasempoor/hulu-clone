import { GET_USER_ROUTE } from "@/core/data/apiRoutes";
import axios from "axios";
import useSWR from "swr";

const fetcher = (...args) => axios.get(...args).then((res) => res.json());

const useFavorites = () => {
  const { data } = useSWR(GET_USER_ROUTE, fetcher);
  const userFavorite = data;
  //swr config

  // render data
  return { userFavorite };
};
export default useFavorites;
