import React from "react";
import style from "./Content2.module.css";

//component

//assets
import chain from "../../../assets/images/chain.svg";
import create from "../../../assets/images/create.svg";
import money from "../../../assets/images/money.svg";
import line from "../../../assets/images/line.svg";

function Content2() {
    return (
        <div className={style.content2}>
        {/* content 2 - start */}
          <div className={style.content2_inside}>
            <div className={style.content2_main_title}>
              Masalah Apa yang Kami Selesaikan?
            </div>
            <div className={style.content2_container}>
              <div className={style.content2_box}>
                <div className={style.benefits}>
                  <img src={chain} alt="" className={style.benefitsicon} />
                </div>
                <div className={style.content2_title}>
                  Too Much Bussiness Link
                </div>
                <div className={style.line}>
                  <img src={line} alt="" className={style.linearea} />
                </div>
                <div className={style.content2_description}>
                  Terlalu banyak link yang ingin di sampaikan pada Customer seperti link : E-commerce, sosmed, link event, jualan jasa dll.
                </div>
              </div>
              <div className={style.content2_box}>
                <div className={style.benefits}>
                  <img src={create} alt="" className={style.benefitsicon} />
                </div>
                <div className={style.content2_title}>
                  Create Landing Page
                </div>
                <div className={style.line}>
                  <img src={line} alt="" className={style.linearea} />
                </div>
                <div className={style.content2_description}>
                  Kesulitan membuat Landing Page Penjualan yang simple karena tidak punya basic pemrograman 
                </div>
              </div>
              <div className={style.content2_box}>
                <div className={style.benefits}>
                  <img src={money} alt="" className={style.benefitsicon} />
                </div>
                <div className={style.content2_title}>
                  Management Transaction
                </div>
                <div className={style.line}>
                  <img src={line} alt="" className={style.linearea} />
                </div>
                <div className={style.content2_description}>
                  Karena banyaknya Transaksi di berbagai link, jadi kesulitan mengatur transaksi, follow-up, hingga membuat laporan penjualan
                </div>
              </div>
            </div>
          </div>
        {/* content 2 - ends */}
        </div>
    );
}

export default Content2;
