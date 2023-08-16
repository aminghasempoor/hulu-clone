const key = process.env.NEXT_PUBLIC_KEY;

const Request = {
  RequestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  RequestTrending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`,
  RequestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  RequestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  RequestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  RequestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
};
export default Request;
