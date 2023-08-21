import DashboardComponent from "@/components/Dashboard";
import WithAuthMiddleware from "@/middlewares/WithAuth";

export default function Dashboard() {
  return (
    <WithAuthMiddleware>
      <DashboardComponent />
    </WithAuthMiddleware>
  );
}
