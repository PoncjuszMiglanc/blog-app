import TheNav from "./Components/TheNav";
import TheFooter from "./Components/TheFooter";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <TheNav />

      <Outlet />

      <TheFooter />
    </>
  );
};

export default Layout;
