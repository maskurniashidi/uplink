import React from "react";
import style from "./style/PaymentMethod.module.css";

//component
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function PaymentMethod() {
  return (
    <div className={style.paymentMethod}>
      <h5 className={style.title}>Payment</h5>
      <div className={style.container}>
        <div className={style.containerLeft}>
          <FaMoneyCheckAlt className={style.iconPayment} />
          <p className={style.text}>Payment Methods</p>
        </div>
        <MdOutlineKeyboardArrowRight className={style.iconArrow} />
      </div>
    </div>
  );
}

export default PaymentMethod;
