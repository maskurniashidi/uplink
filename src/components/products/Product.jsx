import React from "react";
import style from "./style/Product.module.css";

function Product() {
  return (
    <div className={style.product}>
      <div className={style.cardProduct}>
        <div className={style.imageBox}>
          <img src="https://pix10.agoda.net/hotelImages/115/1158515/1158515_17090410220055943050.jpg?s=1024x768" alt="Hotel" className={style.imageProduct} />
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
