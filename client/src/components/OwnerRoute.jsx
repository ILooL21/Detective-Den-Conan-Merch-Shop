import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const OwnerRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  if (userInfo.role === "superadmin") {
    return <Outlet />;
  } else {
    toast.error("You are not authorized to view this page");
    return (
      <>
        <Navigate
          to="/"
          replace
        />
      </>
    );
  }
};
export default OwnerRoute;
