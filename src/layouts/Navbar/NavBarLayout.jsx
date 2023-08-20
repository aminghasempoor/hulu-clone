import useUser from "@/libs/app/hooks/useUser";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import NavBarLogOut from "./NavBarLogOut";
import NavBarEnter from "./NavBarEnter";

function NavBar(props) {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuth, clearToken } = useUser();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleClick = () => {
    clearToken();
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
        {isAuth ? <NavBarLogOut handleClick={handleClick} /> : <NavBarEnter />}
      </div>
      {/* Conditional rendering based on showMenu state */}
      {showMenu &&
        (isAuth ? <NavBarLogOut handleClick={handleClick} /> : <NavBarEnter />)}
      {props.children}
    </div>
  );
}

export default NavBar;
