import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//component
import Home from "./view/home/Home";
import Checkout from "./view/checkout/Checkout";
import Landing from "./view/landing/Landing";
import Address from "./view/Addess/Address";
import Payment from "./view/payment/Payment";
import Transaction from "./view/transaction/Transaction";
import SubsciptionDetail from "./view/subscription/SubsciptionDetail";
import Event from "./view/event/Event";
import Support from "./view/support/Support";

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
        <Route path="/landing">
          <Landing />
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
        <Route path="/transaction">
          <Transaction />
        </Route>
        <Route path="/subscriptionDetail">
          <SubsciptionDetail />
        </Route>
        <Route path="/eventDetail">
          <Event />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
