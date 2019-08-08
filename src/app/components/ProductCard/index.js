import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import BackgroundContext from "../BackgroundContext";
import ShopContext from "../ShopContext";

function ProductCard({ name, image, description, price, currencySymbol, id }) {
  const {
    toggleFavorite,
    removeFromCart,
    addToCart,
    favorites,
    cart
  } = useContext(ShopContext);
  const isFavorite = favorites.some(itemId => itemId === id);
  const cartIndex = cart.findIndex(item => item.id === id);
  const cartCount = cartIndex > -1 ? cart[cartIndex].count : 0;

  const { background, setBackground } = useContext(BackgroundContext);
  const className = isFavorite
    ? "ProductCard ProductCard__favorite"
    : "ProductCard";

  const randomColor = () =>
    setBackground("#" + ((Math.random() * 0xffffff) << 0).toString(16));

  return (
    <div style={{ background }} className={className}>
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
          <button type="button" onClick={() => toggleFavorite(id)}>
            <span role="img" aria-label="add to favorites heart illustration">
              {isFavorite ? "❌" : "💜"}
            </span>
          </button>
          {!!cartCount && (
            <button type="button" onClick={() => removeFromCart(id)}>
              <span role="img" aria-label="remove from cart illustration">
                🗑️
              </span>
            </button>
          )}
          <button type="button" onClick={() => addToCart(id)}>
            <span role="img" aria-label="add to cart illustration">
              🛒
            </span>
            {!!cartCount && (
              <div className="ProductCard--cta-count">{cartCount}</div>
            )}
          </button>
          <button type="button" onClick={randomColor}>
            Change Color
          </button>
        </div>
      </div>
    </div>
  );
}

// export default withBackgroundColor(ProductCard);
export default ProductCard;
