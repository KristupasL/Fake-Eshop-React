import React from "react";
import "./index.scss";

function Layout({ children }) {
  return (
    <React.Fragment>
      <header>
        <h1>Hello there, customer..</h1>
      </header>
      <main>{children}</main>
      <footer>
        <span role="img" aria-label="footer">
          ❤️
        </span>
      </footer>
    </React.Fragment>
  );
}

export default Layout;
