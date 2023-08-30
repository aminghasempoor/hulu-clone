import useLoading from "@/libs/app/hooks/useLoading";
import useUser from "@/libs/app/hooks/useUser";
import { useEffect } from "react";

function AppLayout({ children }) {
  const { setLoadingPage } = useLoading();
  const { token, isAuth } = useUser();

  useEffect(() => {
    if (token) {
      if (isAuth) {
        setLoadingPage(false);
        return;
      }
      setLoadingPage(true);
      return;
    }
    setLoadingPage(false);
    return;
  }, [token, isAuth]);

  return <>{children}</>;
}

export default AppLayout;
