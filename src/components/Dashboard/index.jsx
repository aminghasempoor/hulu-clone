import React from "react";
import SavedShows from "./SavedShows";
import Image from "next/image";
import UserInfo from "./UserInfo";

function DashboardComponent() {
  return (
    <>
      <div className="w-full h-screen text-white">
        <Image
          src="/register.jpg"
          alt="dashboard"
          width={1000}
          height={1000}
          className="sm:block absolute w-full h-full object-cover"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
        <div className="absolute top-[15%] p-6">
          <h1 className="text-3xl md:text-5xl font-bold">Profile</h1>
        </div>
        <UserInfo />
      </div>
      {/* <SavedShows /> */}
    </>
  );
}

export default DashboardComponent;
