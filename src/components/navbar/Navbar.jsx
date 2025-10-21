import React from "react";
import MyLink from "./MyLink";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#0D1164] to-[#640D5F] ">
      <div className="navbar  text-white shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <MyLink to={"/"}>Home</MyLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl">🔥</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
            <MyLink className={"hover:bg-[#090040] py-2 px-4"} to={"/"}>
              Home
            </MyLink>
            <MyLink className={"hover:bg-[#090040] py-2 px-4"} to={"/about"}>
              About Us
            </MyLink>
            <MyLink className={"hover:bg-[#090040] py-2 px-4"} to={"/profile"}>
              Profile
            </MyLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={'/signin'} className="btn bg-[#9112BC] text-white border-none shadow-none">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
