import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
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
          <p class="text-center normal-case text-xl">daisyUI</p>
        </Link>
      </div>
      <div class="navbar-center lg:hidden ">
        <Link to={"/"}>
          {" "}
          <p class="text-center normal-case text-xl">daisyUI</p>
        </Link>
      </div>
      <div class="navbar-end hidden lg:flex ">
        <ul class="menu menu-horizontal p-0 space-x-4 text-lg">
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
