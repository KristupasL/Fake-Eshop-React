import React from "react";
import "./index.scss";

function Cart({ products, cart }) {
  const cartItems = cart.map(item => {
    const product = products.find(({ id }) => id === item.id);

    return { ...product, ...item };
  });
  const total = cartItems.reduce(
    (result, { price, count }) => result + Number(price) * count,
    0
  );

  return (
    <div className="Cart">
      {!cart.length && (
        <p>
          Ohhh, no! You don't have anything in your cart{" "}
          <span role="img" aria-label="crying face emoji">
            😢
          </span>
        </p>
      )}
      {!!cartItems.length && (
        <div className="Cart--header">
          <label>Product:</label>
          <label>Price:</label>
        </div>
      )}
      {cartItems.map(({ id, name, price, currencySymbol, count }) => {
        return (
          <div key={id} className="Cart--item">
            <span>
              {name} x {count}
            </span>
            <span>
              {price * count}
              {currencySymbol}
            </span>
          </div>
        );
      })}
      {!!cartItems.length && (
        <div className="Cart--total">
          <label>Total:</label> {total}
        </div>
      )}
    </div>
  );
}

export default Cart;
