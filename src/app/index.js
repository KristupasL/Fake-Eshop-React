import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import {
  Products,
  PageNotFound,
  Cart,
  Favorites,
  SingleProduct
} from "./pages";
import { Layout, BackgroundColorProvider, ShopProvider } from "./components";
import { ROUTES } from "../constants";

function App() {
  return (
    <ShopProvider>
      <BackgroundColorProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path={ROUTES.defaultPage} exact component={Products} />
              <Route path={ROUTES.cart} exact component={Cart} />
              <Route path={ROUTES.favorites} exact component={Favorites} />
              <Route path={ROUTES.product} exact component={SingleProduct} />
              <Redirect exact from={ROUTES.home} to={ROUTES.defaultPage} />
              <Route component={PageNotFound} />
            </Switch>
          </Layout>
        </Router>
      </BackgroundColorProvider>
    </ShopProvider>
  );
}

export default App;
