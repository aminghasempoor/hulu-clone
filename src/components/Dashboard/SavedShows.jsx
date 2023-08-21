import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import useUser from "@/libs/app/hooks/useUser";

import SavedShowItems from "./SavedShowItems";
import { useEffect, useState } from "react";

function SavedShows() {
  const { user } = useUser();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  useEffect(() => {
    setFavoriteMovies(user.favorite_movies);
  }, []);

  const SlideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const SlideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="relative">
      <h2 className="text-white font-bold md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={SlideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {favoriteMovies ? (
            favoriteMovies.map((item) => (
              <div
                key={item.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <SavedShowItems item={item} />
              </div>
            ))
          ) : (
            <h1>There is no saved movies</h1>
          )}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
}
export default SavedShows;
