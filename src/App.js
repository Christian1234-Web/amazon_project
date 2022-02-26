import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import { CartProvider } from "react-use-cart";
import "./styles.css";
import "./endStyles.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

import AdminIndex from "./admin/pages/AdminIndex";
import StoreContext from "./context/store";

function App() {
  return (
    <CartProvider>
    <StoreContext>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Index} exact/>
        <Route path="/index">
          <Index/>
          </Route>
          <Route path="/adminIndex">
          <AdminIndex/>
          </Route>
          <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/product">
          <Product/>
          </Route>        
    </Switch>
      </BrowserRouter>
      </StoreContext>
      </CartProvider>
  );
}

export default App;
