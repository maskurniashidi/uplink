import React from "react";
import { Link } from "react-router-dom";
import style from "./Transaction.module.css";

//component
import PreviousNav from "../../components/nav/PreviousNav";
import { BsCartCheck } from "react-icons/bs";

function Transaction() {
  return (
    <div className={style.transaction}>
      <PreviousNav name="Transaction status" className={style.nav} />
      <div className={style.content}>
        <div className={style.contentBox}>
          {/* top */}
          <div className={style.top}>
            <BsCartCheck className={style.cartIcon} />
            <h5 className={style.titleTop}>Your purchase was succesful</h5>
            <p className={style.descriptionTop}>We sent the receipt to hajimakunama@gmail.com (Don’t forget to check your spam)</p>
          </div>
          {/* bottom */}
          <div className={style.bottom}>
            <h5 className={style.titleBottom}>Order Item(s)</h5>
            <div className={style.contentBottom}>
              <div className={style.productBox}>
                <img src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg" alt="produk" className={style.product} />
              </div>
              <div className={style.productText}>
                <p className={style.productName}>Adidas RUNNING Sepatu Lite Racer 2.0 Wanita Hitam EG3291</p>
                <p className={style.productPrice}>Rp. 450.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.confirmPaymentContainer}>
        <Link to={"/transaction"} className={style.btnConfirmPayment}>
          GET YOUR PURCHASE
        </Link>
      </div>
    </div>
  );
}

export default Transaction;
