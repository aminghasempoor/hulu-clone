import { useRef, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { USER_REGISTER } from "@/core/data/apiRoutes";
import useRegister from "@/libs/app/hooks/useRegister";

const RegisterComponent = () => {
  const userRef = useRef();
  const {
    firstName,
    email,
    password,
    passwordConfirmation,
    setFirstName,
    setEmail,
    setPassword,
    setPasswordConfirmation,
    clearForm,
  } = useRegister();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordConfirmation) {
      if (firstName && email && password && passwordConfirmation) {
        try {
          const response = await axios.post(
            USER_REGISTER,
            {
              username: firstName,
              email: email,
              password: password,
              password_confirmation: passwordConfirmation,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          );
          console.log(response.data.token);
          console.log(JSON.stringify(response));
          clearForm();
        } catch (err) {
          console.log(err.response.data.message);
          alert(err.response.data.message);
        }
      } else {
        alert("Invalid Input !!!");
      }
    } else {
      alert("password and password confirmation should match");
    }
  };
  return (
    <div className="w-full h-screen">
      <Image
        className=" sm:block absolute w-full h-full object-cover"
        src="/register.jpg"
        width={1000}
        height={1000}
        alt="picture"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
      <div className="fixed w-full h-full px-4 py-6 sm:w-full z-50">
        <div className="max-w-[450px] max-h-[850px] my-24 mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] py-8 mx-auto">
            <h1 className="text-3xl font-bold px-1">Sign Up</h1>
            <form
              className="w-full h-auto flex flex-col py-4 px-1"
              onSubmit={handleSubmit}
            >
              <div className="form_control">
                <label
                  htmlFor="firstName"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Name :
                </label>
                <br />
                <input
                  className="p-2 w-full my-2 bg-gray-600 rounded"
                  type="text"
                  ref={userRef}
                  autoComplete="off"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label
                  htmlFor="email"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                  }}
                >
                  Email :{" "}
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 w-full my-2 bg-gray-600 rounded"
                  id="email"
                  autoComplete="off"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label
                  htmlFor="password"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                  }}
                >
                  Password :{" "}
                </label>
                <br />
                <input
                  type="password"
                  className="p-2 w-full my-2 bg-gray-600 rounded"
                  id="password"
                  autoComplete="off"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form_control">
                <label
                  htmlFor="passwordConfirmation"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                  }}
                >
                  Confirm Password :{" "}
                </label>
                <br />
                <input
                  type="password"
                  className="p-2 w-full my-2 bg-gray-600 rounded"
                  id="passwordConfirmation"
                  autoComplete="off"
                  name="passwordConfirmation"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
              </div>
              <button
                className="bg-red-600 py-3 my-6 rounded font-bold hover:border-white hover:border-2"
                type="submit"
              >
                Submit
              </button>
              <div className="flex justify-between items-center text-sm">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember Me
                </p>
                <p>Need Help ?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600">
                  Already Registered ?
                  <Link
                    className="text-white mx-2 hover:text-red-300"
                    href="/login"
                  >
                    Sign In
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterComponent;
