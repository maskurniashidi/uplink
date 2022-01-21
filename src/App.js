import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//component
import Home from "./view/home/Home";
import Checkout from "./view/checkout/Checkout";
import Landing from "./view/landing/Landing";
import Address from "./view/Addess/Address";
import Payment from "./view/payment/Payment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/maskurnia">
          <Home />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
