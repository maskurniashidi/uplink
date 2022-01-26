import React from "react";
import style from "./style/CheckoutSupport.module.css";
// component
import PreviousNav from "../../components/nav/PreviousNav";
import OrderSummary from "../../components/checkout/OrderSummary";
import Email from "../../components/checkout/Email";
import TotalCheckoutNav from "../../components/nav/TotalCheckoutNav";
import Name from "../../components/checkout/Name";
function CheckoutSupport() {
  return (
    <div>
      <div className={style.home}>
        <PreviousNav name="Checkout" className={style.nav} />
        <div className={style.content}>
          <OrderSummary className={style.orderSummary} />
          <Email className={style.email} />
          <Name className={style.name} />
        </div>
        <TotalCheckoutNav className={style.totalCheckoutNav} />
      </div>
    </div>
  );
}

export default CheckoutSupport;
