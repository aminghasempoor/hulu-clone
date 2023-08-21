import { useRef, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { GET_OPERATOR_TOKEN } from "@/core/data/apiRoutes";
import useLogin from "@/libs/app/hooks/useLogin";
import useUser from "@/libs/app/hooks/useUser";
import { useRouter } from "next/router";
import { BounceLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OperatorLoginComponent = () => {
  const userRef = useRef();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { username, password, setUsername, setPassword, clearForm } =
    useLogin();
  const { setToken } = useUser();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    setIsSubmitting(true); // Start submitting
    e.preventDefault();
    if (username && password) {
      try {
        const response = await axios.post(GET_OPERATOR_TOKEN, {
          username: username,
          password: password,
        });
        clearForm();
        setToken(response.data.token);
        router.push("/dashboard");
      } catch (err) {
        toast.error(
          err.response.data ? err.response.data.message : "Server Error"
        );
      } finally {
        setIsSubmitting(false); // Stop submitting
      }
    } else {
      toast.error("complete all fields");
      return;
    }
  };

  return (
    <div className="w-full h-screen">
      <Image
        className="sm:block absolute w-full h-full object-cover"
        width={1000}
        height={1000}
        src="/register.jpg"
        alt="Login"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed px-4 py-10 sm:w-full w-full h-full z-50">
        <div className=" max-w-[400px] h-[500px] my-32 mx-auto bg-black/75 text-white">
          <div className="max-w-[300px] mx-auto py-14">
            <h1 className="text-3xl font-bold mx-1">Operators</h1>
            <form
              className="w-full flex flex-col py-4 sm:w-auto px-3"
              onSubmit={handleSubmit}
            >
              <div className="form_control">
                <label
                  htmlFor="username"
                  style={{
                    fontWeight: "bold",
                    letterSpacing: "3px",
                  }}
                >
                  Username
                </label>
                <br />
                <input
                  type="text"
                  className="p-2 w-full my-2 bg-gray-600 rounded"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  Password
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
              <button
                className="bg-red-600 py-3 my-6 rounded font-bold hover:border-white hover:border-2"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <BounceLoader
                    color={"#ffffff"}
                    loading={isSubmitting}
                    size={30}
                    className="ml-[45%]"
                  />
                ) : (
                  "Submit"
                )}
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
                  New to Netflix ?
                  <Link
                    className="text-white mx-2 hover:text-red-300"
                    href="/register"
                  >
                    Sign Up
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default OperatorLoginComponent;
