import NavMenu from "../Components/NavigationMenu";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
const SharedLayout = () => {
  return (
    <>
      <NavMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
