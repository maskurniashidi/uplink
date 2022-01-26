import React from "react";
import style from "./style/Email.module.css";

//component
import { FaRegKeyboard } from "react-icons/fa";
function Email() {
  return (
    <div className={style.email}>
      <div className={style.top}>
        <h4 className={style.tittle}>Email</h4>
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

export default Email;
