import SavedShows from "./SavedShows";
import Image from "next/image";
import UserInfo from "./UserInfo";
import useUser from "@/libs/app/hooks/useUser";
import axios from "axios";

function DashboardComponent() {
  axios
    .get("http://192.168.1.127:8000/api/roles", {
      headers: {
        Authorization: "Bearer 7|Iq0hgQRt5zIMt4yFF0tjUdc9gzY5IEv669pe5JS7",
      },
    })
    .then((response) => JSON.stringify(response));
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
