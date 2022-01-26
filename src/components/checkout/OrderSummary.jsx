import React from "react";
import style from "./style/OrderSummary.module.css";

function OrderSummary(props) {
  return (
    <div className={style.orderSummary}>
      <div className={style.top}>
        <h4 className={style.topTitle}>Order Summary</h4>
      </div>
      <div className={style.bottom}>
        <div className={style.product}>
          <img src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg" alt="gambar produk" className={style.productImg} />
        </div>
        <div className={style.text}>
          <h4 className={style.textProduct}>Nama Chat Subscription</h4>
          <p className={style.textPrice}>Rp. 25.000</p>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
