import React from "react";
import { Link } from "react-router-dom";
import style from "./style/CheckoutSubscription.module.css";
import PreviousNav from "../../components/nav/PreviousNav";
import TotalCheckoutNav from "../../components/nav/TotalCheckoutNav";
import OrderSummary from "../../components/checkout/OrderSummary";
import Email from "../../components/checkout/Email";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import PricingDetail from "../../components/checkout/PricingDetail";

function CheckoutSubscription() {
  return (
    <div className={style.home}>
      <PreviousNav name="Checkout" className={style.nav} />
      <div className={style.content}>
        <OrderSummary className={style.orderSummary} />
        <Email className={style.email} />
        <PaymentMethod className={style.paymentMethod} />
        <PricingDetail className={style.pricingDetail} />
      </div>
      <TotalCheckoutNav className={style.totalCheckoutNav} />
    </div>
  );
}

export default CheckoutSubscription;
