import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <p>Error! Page not found. 404</p>
      <Link to={ROUTES.defaultPage}>Go Home, you are drunk</Link>
    </div>
  );
}

export default PageNotFound;
