import React from "react";
import "./index.scss";
import { ProductCard } from "../../components";

function Error() {
  return (
    <p>
      Ohhh, no! You don't have favorites{" "}
      <span role="img" aria-label="broken heart emoji">
        💔
      </span>
    </p>
  );
}

function Favorites({ favorites, products = [], cart, ...restProps }) {
  const favoriteProducts = products.filter(product =>
    favorites.includes(product.id)
  );

  return (
    <div className="Favorites">
      {!favoriteProducts.length && <Error />}
      {favoriteProducts.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCard
            {...data}
            key={data.id}
            {...restProps}
            isFavorite
            cartCount={count}
          />
        );
      })}
    </div>
  );
}

export default Favorites;
