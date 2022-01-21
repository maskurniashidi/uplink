import React from "react";
import { Link } from "react-router-dom";

//component
import { RiShoppingBasketLine } from "react-icons/ri";

function TotalSpendingNav() {
  return (
    <div className={style.totalSpendingNav}>
      <RiShoppingBasketLine className={style.basketIcon} />
      <div className={style.detail}>
        <p className={style.title}>Total spending</p>
        <p className={style.price}>Rp. 450.000</p>
      </div>
      <Link to={"/payment"} className={style.btnCheckout}>
        Checkout
      </Link>
    </div>
  );
}

export default TotalSpendingNav;
