import { useCallback, useReducer } from "react";

const initialValue = {
  firstName: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRSTNAME":
      return { ...state, firstName: action.firstName };
    case "SET_EMAIL":
      return { ...state, email: action.email };
    case "SET_PASSWORD":
      return { ...state, password: action.password };
    case "SET_PASSWORDCONFIRMATION":
      return { ...state, passwordConfirmation: action.passwordConfirmation };
    default:
      return state;
  }
};

const useRegister = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const setFirstName = useCallback((firstName) => {
    dispatch({ type: "SET_FIRSTNAME", firstName });
  }, []);
  const setEmail = useCallback((email) => {
    dispatch({ type: "SET_EMAIL", email });
  }, []);
  const setPassword = useCallback((password) => {
    dispatch({ type: "SET_PASSWORD", password });
  }, []);
  const setPasswordConfirmation = useCallback((password_confirmation) => {
    dispatch({ type: "SET_PASSWORDCONFIRMATION", password_confirmation });
  }, []);

  return {
    state,
    firstName: state.firstName,
    email: state.email,
    password: state.password,
    passwordConfirmation: state.passwordConfirmation,
    setFirstName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
  };
};
export default useRegister;
