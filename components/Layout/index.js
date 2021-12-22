import React, { useState } from "react";

import Header from "../Header";
import Footer from "../Footer";
import SideNav from "../SideNav";
// import { Routes } from "../../utils/routes";


const Products = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  // const getRoutes = (routes) => {
  //   return routes.map((prop, key) => {
  //     if (prop.layout === "/shop") {
  //       return (
  //         <Route
  //           exact
  //           path={prop.layout + prop.path}
  //           component={prop.component}
  //           key={key}
  //         />
  //       );
  //     } else {
  //       return null;
  //     }
  //   });
  // };
  return (
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        {children}
        {/* <Switch>{getRoutes(Routes)}</Switch> */}
        <Footer />
      </div>
  );
};

export default Products;
