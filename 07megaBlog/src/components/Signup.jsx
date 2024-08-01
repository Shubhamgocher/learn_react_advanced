import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "./Logo";
import Input from "./Input";
import Button from "./Button";
import authService from "../appwrite/authService";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function Signup() {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function create(data) {
    setError("");
    try {
      const userData = await authService.creatUser(data);

      if (userData) {
        const userData = await authService.getUser();

        console.log("hmm..", userData);
        if (userData) {
          console.log("hellow11");
          dispatch(login(userData));
          console.log("hellow");
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
      console.log("maja aa gaya");
    }
  }

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-lg mx-auto bg-slate-600 rounded-sm border border-black/40 p-6 ">
        <div className="w-full flex justify-center">
          <span className="inline-block">
            <Logo width="70px" />
          </span>
        </div>
        <h2 className="text-center text-white font-bold leading-tight">
          Sign Up in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/65">
          have any account?&nbsp;
          <Link to="/login" className="text-blue-500 text-xl">
            Login
          </Link>
        </p>
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Name"
              type="text"
              placeholder="type your name..."
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email"
              type="email"
              placeholder="type your email..."
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="type your password..."
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" classname="w-full">
              SignUp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
