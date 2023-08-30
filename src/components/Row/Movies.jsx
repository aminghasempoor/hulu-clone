import { ADD_FAVORITE_MOVIE, GET_MOVIES_IMAGE } from "@/core/data/apiRoutes";
import useUser from "@/libs/app/hooks/useUser";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Movies({ item }) {
  const [like, setLike] = useState(false);
  const router = useRouter();
  const { user, token } = useUser();

  const handleClick = () => {
    const movieID = item.id;
    router.push(`/${movieID}`);
  };

  const handleLikeClick = () => {
    setLike(!like);
    if (user.role[0] == "user") {
      axios
        .post(
          ADD_FAVORITE_MOVIE,
          {
            movie_id: item.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          toast.error("Added");
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  return (
    <div className="w-[160px] h-[150px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`${GET_MOVIES_IMAGE}/${item?.image}`}
        alt={item?.title}
        className="h-full w-full object-contain block"
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p
          onClick={handleClick}
          className="whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center"
        >
          {item?.title}
        </p>
        <p onClick={handleLikeClick}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 test-gray-400 z-50" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 test-gray-400 z-50" />
          )}
        </p>
      </div>
    </div>
  );
}

export default Movies;
