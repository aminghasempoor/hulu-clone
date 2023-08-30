import DashboardComponent from "@/components/UserDashboard";
import TitlePage from "@/core/components/TitlePage";
import WithAuthMiddleware from "@/middlewares/WithAuth";

export default function Dashboard() {
  return (
    <WithAuthMiddleware>
      <TitlePage text="Dashboard" />
      <DashboardComponent />
    </WithAuthMiddleware>
  );
}
