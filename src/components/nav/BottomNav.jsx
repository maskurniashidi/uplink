import React from "react";
import style from "./style/BottomNav.module.css";
import { Link } from "react-router-dom";

//component
import { RiHomeLine, RiNewspaperLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

function BottomNav() {
  return (
    <div className={style.bottomNav}>
      <Link className={style.link}>
        <div className={style.boxIcon}>
          <RiHomeLine className={style.icon} />
        </div>
        <p className={style.text}>Home</p>
      </Link>
      <Link className={style.link}>
        <div className={style.boxIcon}>
          <RiNewspaperLine className={style.icon} />
        </div>
        <p className={style.text}>Transaction</p>
      </Link>
      <Link className={style.link}>
        <div className={style.boxIcon}>
          <MdOutlineMail className={style.icon} />
        </div>
        <p className={style.text}>Message</p>
      </Link>
      <Link className={style.link}>
        <div className={style.boxIcon}>
          <BiCategory className={style.icon} />
        </div>
        <p className={style.text}>Category</p>
      </Link>
    </div>
  );
}

export default BottomNav;
