import React from "react";
import style from "./style/NavHome.module.css";

//component
import { AiOutlineSearch } from "react-icons/ai";

//assets
import uplinkLogo from "../../assets/images/uplinkLogo.svg";

function NavHome() {
  return (
    <div className={style.navHome}>
      <div className={style.content}>
        <div className={style.boxSocial}>
          <img src={uplinkLogo} alt="" className={style.socialIcon} />
        </div>
        <div className={style.options}>
          Tentang Kami
        </div>
        <div className={style.options}>
          Layanan
        </div>
        <div className={style.options}>
          Keunggulan
        </div>
        <div className={style.options}>
          Harga
        </div>
        <div className={style.options}>
          Team
        </div>
        <div className={style.options}>
          Contact
        </div>
        <div className={style.signup}>
          Sign Up Free
        </div>
      </div>
    </div>
  );
}

export default NavHome;
