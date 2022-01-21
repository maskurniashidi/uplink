import React from "react";
import style from "./style/OrderItem.module.css";
function OrderItem() {
  return (
    <div className={style.orderItem}>
      <div className={style.top}>
        <h4 className={style.tittle}>Order Item(s)</h4>
      </div>
      <div className={style.bottom}>
        <div className={style.product}>
          <img src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg" alt="gambar produk" className={style.productImg} />
        </div>
        <div className={style.text}>
          <h4 className={style.textProduct}>Adidas RUNNING Sepatu Lite Racer 2.0 Wanita Hitam EG3291</h4>
          <p className={style.textPrice}>Rp. 450.000</p>
        </div>
        <div className={style.boxSum}>
          <button className={style.plus}>-</button>
          <input type="text" className={style.sum} />
          <button className={style.minus}>+</button>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
