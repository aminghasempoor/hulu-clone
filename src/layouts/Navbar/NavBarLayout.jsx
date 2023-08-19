import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function NavBar(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
        <Link
          href="/"
          className="text-red-600 text-2xl sm:text-3xl md:text-4xl font-bold cursor-pointer"
        >
          NETFLIX
        </Link>
        <div className="md:hidden">
          {" "}
          {/* Hide on medium and larger screens */}
          <button className="text-white pr-4" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        <div className="hidden md:block">
          {" "}
          {/* Show on medium and larger screens */}
          <Link href="/login" className="text-white pr-4">
            Sign In
          </Link>
          <Link
            href="/register"
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
      {/* Conditional rendering based on showMenu state */}
      {showMenu && (
        <div className="md:hidden py-10 flex flex-col items-center justify-center">
          <button className="text-white block mb-2">Sign In</button>
          <button className="bg-red-600 px-6 py-2 rounded block text-white">
            Sign Up
          </button>
        </div>
      )}
      {props.children}
    </div>
  );
}

export default NavBar;
