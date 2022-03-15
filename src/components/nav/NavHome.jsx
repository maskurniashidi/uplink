import React from "react";
import { Link } from 'react-router-dom'
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
          About Us
        </div>
        <div className={style.options}>
          Product
        </div>
        <div className={style.options}>
          Blog
        </div>
        <div className={style.options}>
          Price
        </div>
        <div className={style.options}>
          Contact
        </div>
        <div className={style.options}>
          FAQ
        </div>
        <Link to="/register"><div className={style.signup}>
          Sign Up Free
        </div></Link>
      </div>
    </div>
  );
}

export default NavHome;
