import NavMenu from "../Components/NavigationMenu";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};

export default SharedLayout;
