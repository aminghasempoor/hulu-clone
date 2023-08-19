import { useRouter } from "next/router";
import Link from "next/link";
import useUser from "@/libs/app/hooks/useUser";

const WithOutAuthMiddleware = ({ children }) => {
  const { isAuth } = useUser();
  const router = useRouter();
  if (isAuth) {
    return (
      <div>
        <h1>You are logged in and don not need to log in again</h1>
        <Link href={"/"}>Login</Link>
      </div>
    );
  }
  return <>{children}</>;
};

export default WithOutAuthMiddleware;
