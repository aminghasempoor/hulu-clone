import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SavedShowItems from "./SavedShowItems";
import useFavorites from "@/libs/app/hooks/useFavorites";

function SavedShows() {
  const { userFavoriteMovies } = useFavorites();

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
          className="bg-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {userFavoriteMovies ? (
            userFavoriteMovies.map((item) => (
              <div
                key={item.id}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <SavedShowItems item={item} />
              </div>
            ))
          ) : (
            <h3 className="text-white font-bold md:text-xl p-4">
              There is no saved movies ...
            </h3>
          )}
        </div>
        <MdChevronRight
          onClick={SlideRight}
          className="bg-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
}
export default SavedShows;
