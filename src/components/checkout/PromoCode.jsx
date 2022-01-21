import React from "react";
import style from "./style/PromoCode.module.css";

function PromoCode() {
  return (
    <div className={style.promoCode}>
      <h5 className={style.title}>Promo Code</h5>
      <div className={style.inputContainer}>
        <input type="text" className={style.inputCode} placeholder="Enter Promo Code" />
        <button className={style.btnPromo}>Use</button>
      </div>
    </div>
  );
}

export default PromoCode;
