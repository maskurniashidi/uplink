import React from "react";
import { Link } from "react-router-dom";
import style from "./style/ShippingAddress.module.css";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function ShippingAddress() {
  return (
    <Link to={"/address"} className={style.shippingAddress}>
      <VscLocation className={style.iconLocation} />
      <div className={style.text}>
        <h4 className={style.textTittle}>Shipping Address</h4>
        <p className={style.textDescription}>
          <span className={style.name}>Sulistya Ernawati | </span>
          <span className={style.number}>087861130080</span>
          <p className={style.addressDetail}>Jl. Ketintang Barat III No.101</p>
          <p className={style.addressCity}>Kota Surabaya - Jambangan, Jawa Timur, ID 60233</p>
        </p>
      </div>
      <MdOutlineKeyboardArrowRight className={style.iconArrow} />
    </Link>
  );
}

export default ShippingAddress;
