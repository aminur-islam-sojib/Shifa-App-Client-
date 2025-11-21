import { Outlet } from "react-router";
import Navbar from "../Common/Navbar/Navbar";

const AuthLayOut = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AuthLayOut;
