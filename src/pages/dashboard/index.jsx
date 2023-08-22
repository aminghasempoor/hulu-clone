import DashboardComponent from "@/components/UserDashboard";
import WithAuthMiddleware from "@/middlewares/WithAuth";

export default function Dashboard() {
  return (
    <WithAuthMiddleware>
      <DashboardComponent />
    </WithAuthMiddleware>
  );
}
