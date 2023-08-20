import Link from "next/link";
import React from "react";

function NavBarLogOut({ handleClick }) {
  return (
    <div className="hidden md:block">
      {/* Show on medium and larger screens */}
      <Link href="/dashboard" className="text-white pr-4">
        Account
      </Link>
      <button
        onClick={handleClick}
        className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
      >
        Log Out
      </button>
    </div>
  );
}

export default NavBarLogOut;
