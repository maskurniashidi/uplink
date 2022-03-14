import React from "react";
import style from "./Footer.module.css";

//component

//assets
import FooterBackground from "../../assets/images/Footer.svg";
import Logo from "../../assets/images/uplink.svg";
import Maps from "../../assets/images/FooterMaps.svg";
import Globe from "../../assets/images/FooterGlobe.svg";
import Phone from "../../assets/images/FooterPhone.svg";
import Email from "../../assets/images/FooterEmail.svg";

import FooterTwitter from "../../assets/images/FooterTwitter.svg";
import FooterInstagram from "../../assets/images/FooterInstagram.svg";
import FooterYoutube from "../../assets/images/FooterYoutube.svg";

function Footer() {
    return (
        <div className={style.footerContainer}>
            <div className={style.footerUpper}>
                <div className={style.logoContainer}>
                    <img src={Logo} alt="" className={style.FooterLogoUplink} />
                </div>
            </div>
            <div className={style.footerMid}>
                <div className={style.footerMidContent}>
                    <div className={style.TitleIcon}>
                        <img src={Maps} alt="" className={style.FooterLogo} />
                    </div>
                    <div className={style.Description}>
                        <div className={style.TitleText}>
                            Head Office
                        </div>
                        <div className={style.TitleDescription}>
                            Jl. Ngagel Tama No.19, Bratajaya, Kec. Gubeng, Kota Surabaya, Jawa Timur 60283
                        </div>
                    </div>
                </div>
                <div className={style.footerMidContent}>
                    <div className={style.TitleIcon}>
                        <img src={Globe} alt="" className={style.FooterLogo} />
                    </div>
                    <div className={style.Description}>
                        <div className={style.TitleText}>
                            Our Partners
                        </div>
                        <div className={style.TitleDescription}>
                        Wallts Official Store
                        </div>
                    </div>
                </div>
                <div className={style.footerMidContent}>
                    <div className={style.TitleIcon}>
                        <img src={Phone} alt="" className={style.FooterLogo} />
                    </div>
                    <div className={style.Description}>
                        <div className={style.TitleText}>
                            Phone
                        </div>
                        <div className={style.TitleDescription}>
                            +62 813-3412-6517
                        </div>
                    </div>
                </div>
                <div className={style.footerMidContent}>
                    <div className={style.TitleIcon}>
                        <img src={Email} alt="" className={style.FooterLogo} />
                    </div>
                    <div className={style.Description}>
                        <div className={style.TitleText}>
                            Email
                        </div>
                        <div className={style.TitleDescription}>
                            uplink@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerBottom}>
                <div className={style.footerBottomFirst}>
                    <div className={style.footerBottomFirstContent}>
                        About Us
                    </div>
                    <div className={style.footerBottomFirstContent}>
                        Product
                    </div>
                    <div className={style.footerBottomFirstContent}>
                        Blog
                    </div>
                    <div className={style.footerBottomFirstContent}>
                        Price
                    </div>
                    <div className={style.footerBottomFirstContent}>
                        Contact
                    </div>
                    <div className={style.footerBottomFirstContent}>
                        FAQ
                    </div>
                </div>
                <div className={style.footerBottomSecond}>
                    <div className={style.footerBottomSecondRelative}>
                        © Copyright 2021 Uplink.id- All Rights Reserved
                    </div>
                    <div className={style.footerBottomAbsolute}>
                        <div className={style.FooterIcon}>
                            <img src={FooterTwitter} alt="" className={style.FooterLogoSocmed} />
                        </div>
                        <div className={style.FooterIcon}>
                            <img src={FooterInstagram} alt="" className={style.FooterLogoSocmed} />
                        </div>
                        <div className={style.FooterIcon}>
                            <img src={FooterYoutube} alt="" className={style.FooterLogoSocmed} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
