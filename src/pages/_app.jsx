import NavBar from "@/layouts/Navbar/NavBarLayout";
import { UserProvider } from "@/libs/app/context/user";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </UserProvider>
  );
};
export default App;
