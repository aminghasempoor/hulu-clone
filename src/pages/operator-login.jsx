import OperatorLoginComponent from "@/components/Login/OperatorLogin";
import WithOutAuthMiddleware from "@/middlewares/WithoutAuth";

function OperatorLogin() {
  return (
    <WithOutAuthMiddleware>
      <OperatorLoginComponent />
    </WithOutAuthMiddleware>
  );
}

export default OperatorLogin;
