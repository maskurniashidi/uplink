import React from "react";
import style from "./style/CheckoutProduct.module.css";
import ShippingAddress from "../../components/checkout/ShippingAddress";
import NavSearch from "../../components/nav/NavSearch";
import BottomNav from "../../components/nav/BottomNav";
import PreviousNav from "../../components/nav/PreviousNav";
import OrderItem from "../../components/checkout/OrderItem";
import ShippingOptions from "../../components/checkout/ShippingOptions";
import Message from "../../components/checkout/Message";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import PromoCode from "../../components/checkout/PromoCode";
import PricingDetail from "../../components/checkout/PricingDetail";
import TotalCheckoutNav from "../../components/nav/TotalCheckoutNav";
function CheckoutProduct() {
  return (
    <div>
      <div className={style.home}>
        <PreviousNav name="Checkout" className={style.nav} />
        <div className={style.content}>
          <ShippingAddress className={style.shippingAddress} />
          <OrderItem className={style.orderItem} />
          <ShippingOptions className={style.shippingOptions} />
          <Message className={style.message} />
          <PaymentMethod className={style.PaymentMethod} />
          <PromoCode className={style.promoCode} />
          <PricingDetail className={style.pricingDetail} />
        </div>
        <TotalCheckoutNav className={style.totalCheckoutNav} />
      </div>
    </div>
  );
}

export default CheckoutProduct;
