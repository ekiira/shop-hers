import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <p>
        <Link to="/shop">Products</Link>
      </p>
    </div>
  );
};

export default Landing;
