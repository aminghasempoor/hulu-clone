import AppLayout from "@/layouts/AppLayout";
import NavBar from "@/layouts/Navbar/NavBarLayout";
import { LoadingProvider } from "@/libs/app/context/loading";
import { UserProvider } from "@/libs/app/context/user";
import "@/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <LoadingProvider>
        <AppLayout>
          <NavBar>
            <Component {...pageProps} />
          </NavBar>
        </AppLayout>
      </LoadingProvider>
    </UserProvider>
  );
};
export default App;
