import { useCallback, useReducer } from "react";

const initialValue = {
  username: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.username };
    case "SET_PASSWORD":
      return { ...state, password: action.password };
    default:
      return state;
  }
};

const useLogin = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const setUsername = useCallback((username) => {
    dispatch({ type: "SET_USERNAME", username });
  }, []);
  const setPassword = useCallback((password) => {
    dispatch({ type: "SET_PASSWORD", password });
  }, []);

  return {
    state,
    username: state.username,
    password: state.password,
    setUsername,
    setPassword,
  };
};
export default useLogin;
