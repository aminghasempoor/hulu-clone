import useUser from "@/libs/app/hooks/useUser";
import CenterLayout from "@/layouts/CenterLayout";

const WithOutAuthMiddleware = ({ children }) => {
  const { isAuth } = useUser();
  if (isAuth) {
    return (
      <CenterLayout
        title="Your logged in and dont need to log in again"
        link="dashboard"
      />
    );
  }
  return <>{children}</>;
};

export default WithOutAuthMiddleware;
