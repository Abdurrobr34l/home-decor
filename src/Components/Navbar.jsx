import React from "react";
import { Link, NavLink } from "react-router";

const navLinks = [
  {id:1, name: "Home", path: "/"},
  {id:2, name: "Products", path: "/products"},
]

const Navbar = () => {
  return (
    <div className="navbar px-0">
      {/* Dropdown Menu & Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost px-0 lg:hidden">
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
          <ul tabIndex={0} className="menu menu-sm dropdown-content flex gap-5 bg-base-100 rounded-box z-1 mt-4 w-52 shadow">
            {
              navLinks.map(({id, name, path}) => (
                <NavLink key={id} to={path}>{name}</NavLink>
              ))
            }
          </ul>
        </div>
        <Link to={"/"} className="text-2xl font-bold">Home Decor</Link>
      </div>

      {/* Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-5">
          {
            navLinks.map(({id, name, path}) => (
              <NavLink key={id} to={path}>{name}</NavLink>
            ))
          }
        </ul>
      </div>

      {/* Button */}
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
