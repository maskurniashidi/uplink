import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//component
import Home from "./view/home/Home";
import NotFound from "./view/NotFound";
import CheckoutProduct from "./view/checkout/CheckoutProduct";
import Landing from "./view/landing/Landing";
import LandingNew from "./view/landingnew/LandingNew";
import ContactUs from "./view/contactus/ContactUs";
import Faq from "./view/faq/Faq";
import Login from "./view/login/Login";
import Address from "./view/Addess/Address";
import Payment from "./view/payment/Payment";
import Transaction from "./view/transaction/Transaction";
import SubsciptionDetail from "./view/subscription/SubsciptionDetail";
import Event from "./view/event/Event";
import Support from "./view/support/Support";
import PaymentList from "./view/payment/PaymentList";
import CheckoutSubscription from "./view/checkout/CheckoutSubscription";
import CheckoutEvent from "./view/checkout/CheckoutEvent";
import CheckoutSupport from "./view/checkout/CheckoutSupport";
import DetailModal from "./components/modal/DetailModal";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/landingnew">
          <LandingNew />
        </Route>
        <Route exact path="/contactus">
          <ContactUs />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/:username/:viewing?">
          <Home />
        </Route>
        <Route path="/checkoutproduct">
          <CheckoutProduct />
        </Route>
        <Route path="/checkoutsubscription">
          <CheckoutSubscription />
        </Route>
        <Route path="/checkoutevent">
          <CheckoutEvent />
        </Route>
        <Route path="/checkoutsupport">
          <CheckoutSupport />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/paymentlist">
          <PaymentList />
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
        <Route path="/modal">
          <DetailModal />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
