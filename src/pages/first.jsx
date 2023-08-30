import Main from "@/components/Main/MainComponent";
import Row from "@/components/Row/RowComponent";
import {
  GET_ACTION_MOVIE,
  GET_ALL_MOVIES,
  GET_COMEDY_MOVIE,
  GET_DRAMA_MOVIE,
} from "@/core/data/apiRoutes";

function first() {
  return (
    <div>
      <Main />
      <Row rowID="5" title="Action" fetchURL={GET_ACTION_MOVIE} />
      <Row rowID="2" title="Drama" fetchURL={GET_DRAMA_MOVIE} />
      <Row rowID="3" title="Comedy" fetchURL={GET_COMEDY_MOVIE} />
      <Row rowID="1" title="UpComing" fetchURL={GET_ALL_MOVIES} />
      <Row rowID="4" title="TopRated" fetchURL={GET_ALL_MOVIES} />
      <Row rowID="6" title="Horror" fetchURL={GET_ALL_MOVIES} />
    </div>
  );
}

export default first;
