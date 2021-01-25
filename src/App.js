import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Landing from "./views/Landing";
import Auth from "./views/Auth";
import Admin from "./admin/Admin";
import Add from "./admin/Add";
import Products from "./layout/Products";

const ProductsRoute = ({ component, ...rest }) => {
  const RouteComponent = component;
  return (
    <Route
      {...rest}
      render={({ location, ...otherProps }) => (
        <RouteComponent location={location} {...otherProps} />
      )}
    />
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />

          <Route path="/login" exact component={Auth} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/add" exact component={Add} />
          <ProductsRoute path="/shop" component={Products} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
