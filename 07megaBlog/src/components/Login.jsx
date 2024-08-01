import React, { useState } from "react";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { useDispatch } from "react-redux";
import authService from "../appwrite/authService";
import { login as userLogin } from "../store/authSlice";

function Login() {
  const [error,setError]=useState("");
  const { register, handleSubmit } = useForm();
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const loginSubmit=async (data)=>{
    setError("");
    console.log("data",data);
    console.log("Hellow");
    try {
        console.log("hellow2")
        const user=await authService.login(data);
        console.log("user",user)
        if(user){
          const userData=await authService.getUser();
          console.log("userData",userData);
          if(userData){
            dispatch(userLogin(userData));
            console.log("Hellow")
          }
          navigate('/');
        }
    } catch (error) {
      setError(error.message);
    }
  }
  console.log("Hmm..")
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
          Don&apos;t have any account?&nbsp;
          <Link to="/signup">Sign Up</Link>
        </p>
        <form onSubmit={handleSubmit(loginSubmit)}>
          <div className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="type your email..."
              {...register("email", {
                required:true,
                validate:{
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }

              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="type your password..."
              {...register("password", {
                required:true,
                
              })}
            />
            <Button type="submit" classname="w-full">Sign in</Button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
