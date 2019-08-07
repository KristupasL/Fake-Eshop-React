import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import { Loader, ProductCard } from "../../components";

function Products({
  isLoading,
  error,
  products = [],
  favorites,
  cart,
  ...restProps
}) {
  return (
    <div className="Products">
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => {
        const { count = 0 } = cart.find(({ id }) => id === data.id) || {};

        return (
          <ProductCard
            {...restProps}
            {...data}
            key={data.id}
            isFavorite={favorites.includes(data.id)}
            cartCount={count}
          />
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  const { products } = state.shop;

  return { products };
}

export default connect(mapStateToProps)(Products);
