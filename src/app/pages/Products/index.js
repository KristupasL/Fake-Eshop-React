import React, { useContext } from "react";
import "./index.scss";
import { Loader, ProductCard, ShopContext } from "../../components";

function Products() {
  const { products, error, loading } = useContext(ShopContext);

  return (
    <div className="Products">
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {products.map(data => {
        return <ProductCard {...data} key={data.id} />;
      })}
    </div>
  );
}

export default Products;
