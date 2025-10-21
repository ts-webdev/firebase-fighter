import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router";

const SignIn = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar></Navbar>

      <div className="flex-1 flex items-center justify-center bg-gradient-to-bl from-[#471396]  to-[#B13BFF]">
        <div className="hero-content flex-col justify-between lg:flex-row-reverse">
          <div className="card bg-white/10 w-1/2 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-center font-bold text-2xl">Sign in</h2>
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
                  Login
                </button>
                <div></div>
              </fieldset>
              <div className="flex gap-2 items-center justify-center">
                <span className="w-10 h-px bg-amber-50"></span>
                <span className="text-lg">or</span>
                <span className="w-10 h-px bg-amber-50"></span>
              </div>
              <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
              <p className="mt-2 text-center">Don't have an account? <Link to={'/signup'} className="text-amber-200 font-semibold">Sign Up</Link></p>
            </div>
          </div>
          <div className="text-center w-2/3 lg:text-left">
            <h1 className="text-5xl font-bold">Welcome Back!</h1>
            <p className="py-6">
              Sign in to Continue your journey. Manage yoiur account, explore new features and more.
            </p>
          </div>
          
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SignIn;
