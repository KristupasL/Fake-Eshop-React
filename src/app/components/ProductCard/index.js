import React from "react";
import { connect } from "react-redux;";
import { Link } from "react-router-dom";
import "./index.scss";

function ProductCard({
  name,
  image,
  description,
  price,
  currencySymbol,
  id,
  isFavorite,
  cartCount,
  toggleFavorite,
  addToCart,
  removeFromCart
}) {
  const className = isFavorite
    ? "ProductCard ProductCard__favorite"
    : "ProductCard";

  return (
    <div className={className}>
      <div className="ProductCard--image">
        <img alt={`product: ${name}`} src={image} />
      </div>
      <div className="ProductCard--info">
        <Link to={`/product/${id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
      </div>
      <div className="ProductCard--cta">
        <p>
          <span>Price:</span> <span>{`${price}${currencySymbol}`}</span>
        </p>
        <div>
          <button type="button" onClick={toggleFavorite}>
            <span role="img" aria-label="add to favorites heart illustration">
              {isFavorite ? "❌" : "💜"}
            </span>
          </button>
          {!!cartCount && (
            <button type="button" onClick={removeFromCart}>
              <span role="img" aria-label="remove from cart illustration">
                🗑️
              </span>
            </button>
          )}
          <button type="button" onClick={addToCart(cartCount)}>
            <span role="img" aria-label="add to cart illustration">
              🛒
            </span>
            {!!cartCount && (
              <div className="ProductCard--cta-count">{cartCount}</div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  const { cart, favorites } = state.shop;
  const item = cart.find(({ id }) => id === props.id);

  return {
    cartCount: item ? item.count : 0,
    isFavorite: favorites.include(props.id)
  };
}

function mapDispatchToProps(dispatch, { id }) {
  return {
    addToCart: count =>
      dispatch({
        type: "ADD_TO_CART",
        payload: { id, count: count + 1 }
      }),
    removeFromCart: () =>
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: id
      }),
    toggleFavorite: () =>
      dispatch({
        type: "TOGGLE_FAVORITE",
        payload: id
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
