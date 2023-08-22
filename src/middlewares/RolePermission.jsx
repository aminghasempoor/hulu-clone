import CenterLayout from "@/layouts/CenterLayout";
import useUser from "@/libs/app/hooks/useUser";

const RolePermissionMiddleware = ({ children, requiredPermissions }) => {
  const { user } = useUser();

  const hasPermission = requiredPermissions.some((permission) =>
    user?.role?.includes(permission)
  );

  if (!hasPermission) {
    return (
      <CenterLayout
        title="You Dont Have Access To This Page"
        link="user-login"
      />
    );
  }

  return <>{children}</>;
};

export default RolePermissionMiddleware;
