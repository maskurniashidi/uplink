import React from "react";
import style from "./Content3.module.css";

//component

//assets
import signphone from "../../../assets/images/signphone.svg";
import globe from "../../../assets/images/globe.svg";
import yinyang from "../../../assets/images/yinyang.svg";
import line2 from "../../../assets/images/line2.svg";

function Content3() {
    return (
      <div className={style.content3}>
      {/* content 3 - start */}
        <div className={style.content3_inside}>
          <div className={style.signphone}>
            <img src={signphone} alt="" className={style.signphonearea} />
          </div>
          <div className={style.content3_right}>
            <div className={style.content3_title}>
              Apa itu Uplink.id
            </div>
            <div className={style.line2}>
              <img src={line2} alt="" className={style.line2area} />
            </div>
            <div className={style.content3_container}>
              <div className={style.content3_box}>
                Sebuah Platform yang memudahkan entrepreneurs dan influencers untuk memberikan seluruh informasi dengan satu link
              </div>
              <div className={style.content3_container_bottom}>
                <div className={style.content3_leftmodals}>
                  <div className={style.benefits}>
                    <img src={globe} alt="" className={style.benefitsicon} />
                  </div>
                  <div className={style.content3_leftmodals_title}>
                    Buat Website Tanpa Perlu Kemampuan Coding
                  </div>
                  <div className={style.content3_leftmodals_description}>
                    Memudahkan Penguna Membuat Website / Landing Page tanpa perlu mempunyai kemampuan Coding/ Programer. Cukup Satu Klik dapat membuat Website Jualan Produk Mulai produk Jasa, Digital hingga Produk Fisik. 
                  </div>
                </div>
                <div className={style.content3_rightmodals}>
                  <div className={style.benefits}>
                    <img src={yinyang} alt="" className={style.benefitsicon} />
                  </div>
                  <div className={style.content3_rightmodals_title}>
                    Tampilan yang Simple dan Elegan
                  </div>
                  <div className={style.content3_rightmodals_description}>
                    Uplink.id sangat mudah digunakan bahkan untuk orang awam sekalipun dalam memanajemen transaksi, mendesain call to action hingga meningkatkan penjualan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* content 3 - ends */}
      </div>
    );
}

export default Content3;
