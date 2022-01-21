import React from "react";
import style from "./Address.module.css";
import PreviousNav from "../../components/nav/PreviousNav";
import BottomNav from "../../components/nav/BottomNav";
function Address(props) {
  return (
    <div className={style.home}>
      <PreviousNav name="Address" className={style.nav} />
      <div className={style.content}></div>
      <BottomNav />
    </div>
  );
}

export default Address;
