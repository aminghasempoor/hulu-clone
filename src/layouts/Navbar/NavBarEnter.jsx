import Link from "next/link";

function NavBarEnter() {
  return (
    <div className="hidden md:block">
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
  );
}

export default NavBarEnter;
