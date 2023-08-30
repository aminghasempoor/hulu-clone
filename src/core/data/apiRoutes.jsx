const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

// user data
export const GET_USER_ROUTE = BASE_URL + "/api/profile/user_info";
//end user data

//get image movie
export const GET_MOVIES_IMAGE = BASE_IMAGE_URL;
//end image movie

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

//get action movie
export const GET_ACTION_MOVIE = BASE_URL + "/api/category/action";
//end action movie

//get drama movie
export const GET_DRAMA_MOVIE = BASE_URL + "/api/category/drama";
//end drama movie

//get comedy movie
export const GET_COMEDY_MOVIE = BASE_URL + "/api/category/comedy";
//end comedy movie

//add favorite movie
export const ADD_FAVORITE_MOVIE = BASE_URL + "/api/profile/user_favorite_movie";
//add favorite movie
