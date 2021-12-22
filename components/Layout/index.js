import { useState } from "react";
import { useRouter } from "next/router";

import Header from "../Header";
import Footer from "../Footer";
import SideNav from "../SideNav";
import { Routes } from "../../utils/routes";

const Layout = ({ children }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathName = router?.pathname;

  const getRoutes = () => {
    if (pathName.includes("/shop")) {
      return (
        <div>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
          {children}
          <Footer />
        </div>
      );
    } else {
      return <>{children}</>;
    }
  };

  return <div>{getRoutes()}</div>;
};

export default Layout;
