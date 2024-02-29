import { Outlet, useNavigate } from "react-router-dom";

const ProtectedAdmin = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.role !== "admin") {
    navigate("/");
  }
  return (
    <>
      <Outlet />;
    </>
  );
};

export default ProtectedAdmin;
