import React from "react";
import style from "./style/Product.module.css";

function Product() {
  return (
    <div className={style.product}>
      <div className={style.cardProduct}>
        <div className={style.imageBox}>
          <img src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/10/41/104147_v4.jpeg" alt="Hotel" className={style.imageProduct} />
        </div>
        <div className={style.text}>
          <h5 className={style.textTittle}>Premier Place Sidoarjo - Night Stay in Classic Room</h5>
          <p className={style.textDescription}>Premier Place Sidoarjo - Night Stay in Classic Room</p>
          <p className={style.textPrice}>Rp. 205.000</p>
        </div>
        <button className={style.btnAdd}>Add</button>
      </div>
      <hr />
      <div className={style.cardProduct}>
        <div className={style.imageBox}>
          <img src="https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/10/41/104147_v4.jpeg" alt="Hotel" className={style.imageProduct} />
        </div>
        <div className={style.text}>
          <h5 className={style.textTittle}>Premier Place Sidoarjo - Night Stay in Classic Room</h5>
          <p className={style.textDescription}>Premier Place Sidoarjo - Night Stay in Classic Room</p>
          <p className={style.textPrice}>Rp. 205.000</p>
        </div>
        <button className={style.btnAdd}>Add</button>
      </div>
    </div>
  );
}

export default Product;
