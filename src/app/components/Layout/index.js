import React from "react";
import "./index.scss";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main className="Main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
