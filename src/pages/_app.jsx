import NavBar from "@/layouts/Navbar/NavBarLayout";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>
  );
};
export default App;
