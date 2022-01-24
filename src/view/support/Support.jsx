import React from "react";
import { Link } from "react-router-dom";
import style from "./Support.module.css";
//component
import PreviousNav from "../../components/nav/PreviousNav";

function Support() {
  return (
    <div className={style.support}>
      <PreviousNav name="Support" className={style.nav} />
      <div className={style.content}>
        <div className={style.box}>
          <h5 className={style.title}>Input Amount</h5>
          <div className={style.inputSum}>
            <button className={style.decrease}>-</button>
            <input type="text" className={style.inputField}></input>
            <button className={style.increase}>+</button>
          </div>
          <h5 className={style.totalText}>Total</h5>
          <p className={style.price}>2 x Coffea</p>
          <h5 className={style.descriptionTitle}>Description</h5>
          <p className={style.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu, ultrices morbi quis facilisis lacus. Viverra nulla maecenas proin ullamcorper ultrices feugiat volutpat mollis. Risus sit sit mauris mauris. Diam lectus vel sem
            potenti pharetra urna egestas aenean. Eget nunc a rhoncus tellus pellentesque.
          </p>
          <p className={style.copyDesc}>dailyhotels Supporter</p>
        </div>
      </div>
      <div className={style.wantContainer}>
        <Link to={"/checkout"} className={style.btnWantThis}>
          I WANT THIS
        </Link>
      </div>
    </div>
  );
}

export default Support;
