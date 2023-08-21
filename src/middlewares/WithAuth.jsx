import useUser from "@/libs/app/hooks/useUser";
import CenterLayout from "@/layouts/CenterLayout";

const WithAuthMiddleware = ({ children }) => {
  const { isAuth } = useUser();

  if (!isAuth) {
    return <CenterLayout />;
  }
  return <>{children}</>;
};

export default WithAuthMiddleware;
