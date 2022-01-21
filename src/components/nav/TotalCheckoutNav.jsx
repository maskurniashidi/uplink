import React from "react";
import { Link } from "react-router-dom";
import style from "./style/TotalCheckoutNav.module.css";
function TotalCheckoutNav() {
  return (
    <div className={style.totalCheckoutNav}>
      <div className={style.detail}>
        <p className={style.title}>Total pembayaran</p>
        <p className={style.price}>Rp205.000</p>
      </div>
      <Link to={"/payment"} className={style.btnBuyNow}>
        Buy Now
      </Link>
    </div>
  );
}

export default TotalCheckoutNav;
