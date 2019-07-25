import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants";

function Header() {
  return (
    <header className="Header">
      <nav className="Header--navigation">
        <NavLink
          exact
          className="Header--navigation-item"
          to={ROUTES.defaultPage}
        >
          Home
        </NavLink>
        <NavLink exact className="Header--navigation-item" to={ROUTES.cart}>
          Cart
        </NavLink>
        <NavLink
          exact
          className="Header--navigation-item"
          to={ROUTES.favorites}
        >
          Favorites
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
