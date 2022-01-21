import React from "react";
import style from "./style/ShippingOptions.module.css";

//component
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function ShippingOptions() {
  return (
    <div className={style.shippingOption}>
      <div className={style.top}>
        <h4 className={style.tittle}>Shipping Options</h4>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
          <div className={style.detail}>
            <h5 className={style.kurir}>JNE (reguler)</h5>
            <p className={style.dateShipping}>will be accepted on 14-21 Oct</p>
          </div>
          <div className={style.price}>Rp. 7000</div>
        </div>
        <div className={style.right}>
          <MdOutlineKeyboardArrowRight className={style.iconArrow} />
        </div>
      </div>
    </div>
  );
}

export default ShippingOptions;
