import React from "react";
import { Link } from "react-router-dom";
import style from "./Payment.module.css";

//component
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaRegKeyboard } from "react-icons/fa";
import PreviousNav from "../../components/nav/PreviousNav";
import LogoPaymentMethod from "../../assets/images/ovo.png";
function Payment() {
  return (
    <div className={style.payment}>
      <PreviousNav name="Payment" className={style.nav} />
      <div className={style.content}>
        {/* show detail */}
        <div className={style.showDetail}>
          <h5 className={style.price}>Rp.457.000</h5>
          <p className={style.showDetailText}>Show Detail</p>
          <MdOutlineKeyboardArrowRight className={style.iconArrow} />
        </div>

        {/* payment method */}
        <div className={style.paymentMethod}>
          <h5 className={style.titlePaymentMethod}>Payment Method</h5>
          <img src={LogoPaymentMethod} alt="" className={style.logoPaymentMethod} />
          <h5 className={style.paymentName}>OVO</h5>
        </div>

        {/* phone number */}
        <div className={style.phoneNumber}>
          <div className={style.top}>
            <h4 className={style.tittle}>Phone Number</h4>
          </div>
          <div className={style.bottom}>
            <div className={style.inputContainer}>
              <input type="text" className={style.inputField} placeholder="please leave a message" />
              <FaRegKeyboard className={style.iconKeyboard} />
            </div>
          </div>
        </div>

        {/* how to pay */}
        <div className={style.howToPay}>
          <h5 className={style.titleHowToPay}>How To Pay</h5>
        </div>
      </div>
      <div className={style.confirmPaymentContainer}>
        <Link to={"/transaction"} className={style.btnConfirmPayment}>
          PAY NOW
        </Link>
      </div>
    </div>
  );
}

export default Payment;
