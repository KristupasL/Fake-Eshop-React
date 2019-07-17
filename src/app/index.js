import React from "react";
import { Products } from "./pages";
import { Layout } from "./components";

class App extends React.Component {
  state = {
    products: [],
    isLoading: false,
    error: null
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await fetch(
      "https://boiling-reaches-93648.herokuapp.com/food-shop/products"
    );

    if (response.ok) {
      const result = await response.json();
      this.setState({ products: result, isLoading: false });
    } else {
      this.setState({ error: "Oops! No products found", isLoading: false });
    }
  }

  render() {
    const { products, isLoading, error } = this.state;

    return (
      <Layout>
        <Products products={products} isLoading={isLoading} error={error} />
      </Layout>
    );
  }
}

export default App;
