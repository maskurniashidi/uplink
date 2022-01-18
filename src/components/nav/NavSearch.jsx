import React from "react";
import style from "./style/NavSearch.module.css";

//component
import { AiOutlineSearch } from "react-icons/ai";

function navSearch() {
  return (
    <div className={style.navSearch}>
      <div className={style.content}>
        <div className={style.inputField}>
          <AiOutlineSearch className={style.icon} />
          <input className={style.inputSearch} type="text" placeholder="Cari desain yang kamu butuhkan" />
        </div>
      </div>
    </div>
  );
}

export default navSearch;
