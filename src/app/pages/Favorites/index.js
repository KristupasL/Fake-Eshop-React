import React from "react";
import "./index.scss";
import { ProductCard } from "../../components";

function Favorites({
  favorites,
  products = [],
  cart,
  toggleFavorite,
  addToCart,
  removeFromCart
}) {
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );

  return (
    <div className="Favorites">
      {!favoriteProducts.length && (
        <p>
          Ohhh, no! You don't have favorites{" "}
          <span role="img" aria-label="broken heart emoji">
            💔
          </span>
        </p>
      )}
      {favoriteProducts.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCard
            {...data}
            key={data.id}
            toggleFavorite={toggleFavorite}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            isFavorite
            cartCount={count}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
