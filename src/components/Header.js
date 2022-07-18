import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>
              <Link to={"/add"}>Add Student</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          {" "}
          <p className="text-center font-bold text-blue-700 normal-case text-3xl hidden lg:block">
            TPL
          </p>
        </Link>
      </div>
      <div className="navbar-center lg:hidden ">
        <Link to={"/"}>
          {" "}
          <p className=" font-bold text-blue-700 text-center normal-case text-xl lg:hidden ">
            {" "}
            TPL
          </p>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal p-0 space-x-4 text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>
            <Link to={"/add"}>Add Student</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
