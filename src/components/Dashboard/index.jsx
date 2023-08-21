import SavedShows from "./SavedShows";
import Image from "next/image";
import UserInfo from "./UserInfo";
import useUser from "@/libs/app/hooks/useUser";

function DashboardComponent() {
  return (
    <>
      <div className="w-full text-white">
        <Image
          className="w-full h-[300px] object-cover"
          width={1000}
          height={1000}
          src="/register.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[300px]"></div>
        <div className="absolute top-[15%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">Profile</h1>
        </div>
      </div>
      <UserInfo />
      <SavedShows />
    </>
  );
}

export default DashboardComponent;
