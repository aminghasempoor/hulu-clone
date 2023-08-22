import Image from "next/image";
import Link from "next/link";
import React from "react";

function CenterLayout(props) {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Image
        className="sm:block  w-full h-full object-cover"
        width={1000}
        height={1000}
        src="/register.jpg"
        alt="Login"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
      <div className="text-xl sm:text-2xl px-3 md:text-3xl fixed top-[40%] text-center text-white">
        <h1 className="py-7">{props.title}</h1>
        <Link
          className="bg-red-600 px-3 md:px-6 py-1 rounded cursor-pointer text-white"
          href={`/${props.link}`}
        >
          {props.link}
        </Link>
      </div>

      {props.children}
    </div>
  );
}

export default CenterLayout;
