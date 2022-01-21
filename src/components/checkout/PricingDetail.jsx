import React from "react";
import style from "./style/PricingDetail.module.css";

function PricingDetail() {
  return (
    <div className={style.pricingDetail}>
      <h5 className={style.title}>Pricing Details</h5>
      <div className={style.productFee}>
        <p className={style.productFeeTittle}>Product Fee</p>
        <p className={style.productFeePrice}>Rp. 450.000</p>
      </div>
      <div className={style.shippingFee}>
        <p className={style.shippingFeeTittle}>Shipping Fee</p>
        <p className={style.shippingFeePrice}>Rp. 7.000</p>
      </div>
      <div className={style.totalPayment}>
        <p className={style.totalPaymentTittle}>Total Payment</p>
        <p className={style.totalPaymentPrice}>Rp. 457.000</p>
      </div>
    </div>
  );
}

export default PricingDetail;
