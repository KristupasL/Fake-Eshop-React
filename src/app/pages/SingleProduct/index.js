import React, { useContext } from "react";
import "./index.scss";
import { Redirect } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { Loader, ShopContext } from "../../components";

function SingleProduct({ history, match }) {
  const { products, loading } = useContext(ShopContext);

  const { id } = match.params;
  const product = products.find(product => product.id === id);

  if (!product && !loading) {
    return <Redirect to={ROUTES.defaultPage} />;
  }

  if (loading) {
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
