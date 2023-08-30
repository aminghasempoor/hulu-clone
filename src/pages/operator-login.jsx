import OperatorLoginComponent from "@/components/Login/OperatorLogin";
import TitlePage from "@/core/components/TitlePage";
import WithOutAuthMiddleware from "@/middlewares/WithoutAuth";

function OperatorLogin() {
  return (
    <WithOutAuthMiddleware>
      <TitlePage text="Operator Login" />
      <OperatorLoginComponent />
    </WithOutAuthMiddleware>
  );
}

export default OperatorLogin;
