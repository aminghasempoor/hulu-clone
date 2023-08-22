const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

// user data
export const GET_USER_ROUTE = BASE_URL + "/api/profile/user_info";
//end user data

//all users
export const GET_ALL_USERS = BASE_URL + "/api/users";
//end all users

//user login
export const GET_USER_TOKEN = BASE_URL + "/api/user_login";
//end user login

//operator login
export const GET_OPERATOR_TOKEN = BASE_URL + "/api/user_login";
//end operator login

//register
export const USER_REGISTER = BASE_URL + "/api/user_register";
//end register

//get all movies
export const GET_ALL_MOVIES = BASE_URL + "/api/movies";
//end all movies

//add favorite movie
export const ADD_FAVORITE_MOVIE = BASE_URL + "/api/profile/user_favorite_movie";
//add favorite movie
