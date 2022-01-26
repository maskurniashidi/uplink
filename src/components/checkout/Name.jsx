import React from "react";
import style from "./style/Name.module.css";
//component
import { FaRegKeyboard } from "react-icons/fa";
function Name() {
  return (
    <div className={style.name}>
      <div className={style.top}>
        <h4 className={style.tittle}>Your Name</h4>
      </div>
      <div className={style.bottom}>
        <div className={style.inputContainer}>
          <input type="text" className={style.inputField} placeholder="please leave a message" />
          <FaRegKeyboard className={style.iconKeyboard} />
        </div>
      </div>
    </div>
  );
}

export default Name;
