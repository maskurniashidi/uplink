import React from "react";
import style from "./Content1.module.css";

//component
import NavbarBoots from "../../nav/NavbarBoots";
import NavHome from "../../nav/NavHome";
import BottomNav from "../../nav/BottomNav";
import Company from "../../company/Company";
import ProductContainer from "../../products/ProductContainer";

//assets
import dots from "../../../assets/images/dot.svg";

function Content1() {
    return (
        <div className={style.content1}>
            {/* content 1 - start */}
            <NavHome className={style.nav} />
            {/* <NavbarBoots/> */}
            <div className={style.content1_inside}>
                <div className={style.dotgroup}>
                    <div className={style.dots}>
                        <img src={dots} alt="" className={style.logoCompany} />
                    </div>
                    <div className={style.dots}>
                        <img src={dots} alt="" className={style.logoCompany} />
                    </div>
                    <div className={style.dots}>
                        <img src={dots} alt="" className={style.logoCompany} />
                    </div>
                </div>
                <div className={style.title1}>
                    Create Bussiness
                </div>
                <div className={style.title2}>
                    with Single Link
                </div>
                <div className={style.title3}>
                    "Simple Sharing to Others"
                </div>
                <div className={style.description}>
                    Buat landing Page Produk Digital, Fisik, Jasa, Event, link Donasi, Private Class, dll dalam 1 link saja
                </div>
                <form className={style.registerForm}>
                    <label className={style.registerLabel}>
                        <input type="text" placeholder="Nama Bisnis" className={style.registerInput} />
                        <button className={style.buttonInput}>Create</button>
                    </label>
                </form>
            </div>
            {/* content 1 - end */}
        </div>
    );
}

export default Content1;
