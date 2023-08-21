import useUser from "@/libs/app/hooks/useUser";
import React from "react";

function UserInfo() {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-center z-50">
      <div className="max-w-[350px] sm:max-w-[450px] mx-auto bg-black/75 text-white p-8 rounded-lg">
        <div className="flex flex-col items-center justify-center py-5">
          <img
            className="w-[130px] h-[130px] sm:w-40 sm:h-40 rounded-full py-4"
            src="/register.jpg" //{user.avatar}
            alt="Rounded avatar"
          />
          <h1 className="text-3xl italic uppercase font-bold mx-1">
            Name : {user.username}
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center py-5">
          <p className="tracking-wide">Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
