import useUser from "@/libs/app/hooks/useUser";
import CenterLayout from "@/layouts/CenterLayout";

const WithAuthMiddleware = ({ children }) => {
  const { isAuth } = useUser();

  if (!isAuth) {
    return (
      <CenterLayout
        title="Your Access To This Page Has Expired Please Login Again"
        link="user-login"
      />
    );
  }
  return <>{children}</>;
};

export default WithAuthMiddleware;
