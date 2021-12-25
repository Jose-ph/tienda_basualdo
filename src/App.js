import Navbar from "./components/Navbar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";

import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Context/CartContext";


import CartView from "./components/CartView/CartView";
import CheckOut from "./components/Checkout/CheckOut";
import UserOnly from "./components/UserOnly/UserOnly";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import UserContextProvider from "./Context/UserContext";


function App() {
  return (
    <UserContextProvider>
    <CartContextProvider>

      <Router>
        
        <div className="App">
          <header className="App-header">
            <Navbar />
          </header>

          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Home ----->" />
            </Route>

            <Route exact path="/category/:categoryId">
              <ItemListContainer greeting="Categorías ------>" />
            </Route>

            <Route exact path="/item/:id">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart">
              <CartView/>
            </Route>
            <Route exact path="/checkout">
              <CheckOut/>
            </Route>
            <Route exact path="/userOnly" element={<RestrictedRoute>

              <UserOnly/>
            </RestrictedRoute>}  >
              
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
