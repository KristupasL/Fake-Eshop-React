import React from "react";
import "./index.scss";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { Loader } from "../../components";

function SingleProduct({ history, product, isLoading }) {
  if (!product && !isLoading) {
    return <Redirect to={ROUTES.defaultPage} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  const { name, image, description, price, currencySymbol } = product;
  const onClick = () => history.push(ROUTES.cart);

  return (
    <div className="SingleProduct">
      <img src={image} alt={`product: ${name}`} />
      <p>
        {name} - {price}
        {currencySymbol}{" "}
      </p>
      <p>{description}</p>
      <button type="button" onClick={onClick}>
        Go To Cart
      </button>
    </div>
  );
}

export default SingleProduct;
