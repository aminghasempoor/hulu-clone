const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

// user data
export const GET_USER_ROUTE = BASE_URL + "/api/profile/user_info";
//end user data

//login
export const GET_USER_TOKEN = BASE_URL + "/api/user_login";
//end login

//register
export const USER_REGISTER = BASE_URL + "/api/user_register";
//end register

//get all movies
export const GET_ALL_MOVIES = BASE_URL + "/api/movies";
//end all movies
