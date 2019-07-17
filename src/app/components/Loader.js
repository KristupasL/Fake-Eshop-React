import React from "react";
import LoaderSpinner from "react-loader-spinner";

const loaderProps = {
  type: "Triangle",
  color: "#FF2500",
  height: "100",
  width: "100"
};

function Loader() {
  return <LoaderSpinner {...loaderProps} />;
}

export default Loader;
