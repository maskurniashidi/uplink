import React from "react";
import { useHistory } from "react-router-dom";
import style from "./style/PreviousNav.module.css";
import { BsArrowLeft } from "react-icons/bs";

function PreviousNav(props) {
  const history = useHistory();
  return (
    <div className={style.navPrev}>
      <div className={style.content}>
        <button onClick={history.goBack} className={style.btnArrow}>
          <BsArrowLeft className={style.iconArrow} />
          <p className={style.textArrow}>{props.name}</p>
        </button>
      </div>
    </div>
  );
}

export default PreviousNav;
