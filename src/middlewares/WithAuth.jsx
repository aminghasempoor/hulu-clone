import { useRouter } from "next/router";
import Link from "next/link";
import useUser from "@/libs/app/hooks/useUser";
import CenterLayout from "@/layouts/CenterLayout";

const WithAuthMiddleware = ({ children }) => {
  const { isAuth } = useUser();
  const router = useRouter();

  if (!isAuth) {
    return <CenterLayout />;
  }
  return <>{children}</>;
};

export default WithAuthMiddleware;
