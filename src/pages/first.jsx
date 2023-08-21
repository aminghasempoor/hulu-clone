import Main from "@/components/Main/MainComponent";
import Row from "@/components/Row/RowComponent";
import { GET_ALL_MOVIES } from "@/core/data/apiRoutes";

function first() {
  return (
    <div>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={GET_ALL_MOVIES} />
      <Row rowID="2" title="Popular" fetchURL={GET_ALL_MOVIES} />
      <Row rowID="3" title="Trending" fetchURL={GET_ALL_MOVIES} />
      <Row rowID="4" title="TopRated" fetchURL={GET_ALL_MOVIES} />
      <Row rowID="5" title="Action" fetchURL={GET_ALL_MOVIES} />
      <Row rowID="6" title="Horror" fetchURL={GET_ALL_MOVIES} />
    </div>
  );
}

export default first;
