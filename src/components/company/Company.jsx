import React from "react";
import style from "./Company.module.css";

//component
import LogoCompany from "../../assets/images/Logo-dailyhotels.png";
import ig from "../../assets/images/instagram.png";
import tiktok from "../../assets/images/tiktok.png";
import wa from "../../assets/images/wa.png";
import yt from "../../assets/images/yt.png";

function Company() {
  return (
    <div className={style.company}>
      <div className={style.detail}>
        <div className={style.boxLogo}>
          <img src={LogoCompany} alt="logo perusahaan" className={style.logoCompany} />
        </div>
        <h4 className={style.companyName}>Dailyhotels.id</h4>
        <p className={style.companyDescription}>Indonesia Hospitality & Media Ecosystem - Hotel, Resort & Villa, Restaurant, Association, Vendor</p>
      </div>
      <div className={style.socialList}>
        <div className={style.social}>
          <div className={style.boxSocial}>
            <img src={ig} alt="logo instagram" className={style.socialIcon} />
          </div>
          <p className={style.socialName}>Instagram</p>
        </div>
        <div className={style.social}>
          <div className={style.boxSocial}>
            <img src={tiktok} alt="" className={style.socialIcon} />
          </div>
          <p className={style.socialName}>Tiktok</p>
        </div>
        <div className={style.social}>
          <div className={style.boxSocial}>
            <img src={wa} alt="" className={style.socialIcon} />
          </div>
          <p className={style.socialName}>Whatsapp</p>
        </div>
        <div className={style.social}>
          <div className={style.boxSocial}>
            <img src={yt} alt="logo youtube" className={style.socialIcon} />
          </div>
          <p className={style.socialName}>Youtube</p>
        </div>
      </div>
    </div>
  );
}

export default Company;
