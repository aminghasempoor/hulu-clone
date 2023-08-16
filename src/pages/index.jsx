import Main from "@/components/Main/MainComponent";
import Row from "@/components/Row/RowComponent";
import Request from "@/core/utils/Requests";

export default function Home() {
  return (
    <div>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={Request.RequestUpComing} />
      <Row rowID="2" title="Popular" fetchURL={Request.RequestPopular} />
      <Row rowID="3" title="Trending" fetchURL={Request.RequestTrending} />
      <Row rowID="4" title="TopRated" fetchURL={Request.RequestTopRated} />
      <Row rowID="5" title="Action" fetchURL={Request.RequestAction} />
      <Row rowID="6" title="Horror" fetchURL={Request.RequestHorror} />
    </div>
  );
}
