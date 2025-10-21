import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>

      <div className="flex-1 flex items-center justify-center bg-gradient-to-bl from-[#B13BFF]  to-[#471396]">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <div className="card bg-white/10 w-1/2 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl">Sign Up</h2>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input bg-white/10"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input bg-white/10"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn bg-gradient-to-r from-[#FF3F7F] to-[#DC2525] border-none mt-4">
                  Sign Up
                </button>
                <div></div>
              </fieldset>
              
              <p className="mt-2 text-center">
                Already have an account?
                <Link to={"/signin"} className="text-amber-200 font-semibold">
                  {" "}
                  Sign In
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Create Account!</h1>
            <p className="py-6">
              Join our community and unlock exlusive features. Your journey
              begins here!
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SignUp;
