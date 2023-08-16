const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// user data
export const GET_USER_ROUTE = BASE_URL + "/api/profile_info";
//end user data

//login
export const GET_USER_TOKEN = BASE_URL + "/api/user_login";
//end login

//register
export const USER_REGISTER = BASE_URL + "/api/user_register";
//end register
