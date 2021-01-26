import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import { Routes } from "../routes";


const Products = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/shop") {
        return (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <React.Fragment>
      <div>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <Switch>{getRoutes(Routes)}</Switch>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Products;
