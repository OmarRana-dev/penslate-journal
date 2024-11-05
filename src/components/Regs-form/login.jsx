import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Logo, Input } from "../";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../../store/authSlice";
import authService from "../../appwrite/authService";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);

  const login = async (data) => {
    setErrorMessage("");
    try {
      const session = await authService.login(data);
      console.log(session);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log(userData);
        if (userData) {
          dispatch(authLogin(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full">
        <div className="mx-auto w-full max-w-sm  p-10">
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?{" "}
            <Link
              to="/signup"
              className="font-medium transition-all duration-200 text-blue-500 hover:text-blue-400 underline"
            >
              Sign Up
            </Link>
          </p>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit(login)} className="mt-8 ">
            <div className="space-y-5 flex flex-col items-center">
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
                        value
                      ) || "Email address mush be a valid address",
                  },
                })}
              />
              <Input
                label="Password: "
                placeholder="Enter your password"
                type="password"
                {...register("password", {
                  required: true,
                  validate: {
                    matchPatern: (value) => {
                      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
                        value
                      ) ||
                        `
                        Password must be at least 8 characters long.
                        Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number.
                        Can contain special characters.
                        `;
                    },
                  },
                })}
              />
              <button
                className="btn w-2/5 btn-outline btn-info btn-sm btn-circle "
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
