import React from "react";
import style from "./Landing.module.css";

//component
import NavHome from "../../components/nav/NavHome";
import BottomNav from "../../components/nav/BottomNav";
import Company from "../../components/company/Company";
import ProductContainer from "../../components/products/ProductContainer";

//assets
import dots from "../../assets/images/dot.svg";
import chain from "../../assets/images/chain.svg";
import create from "../../assets/images/create.svg";
import money from "../../assets/images/money.svg";
import line from "../../assets/images/line.svg";
import line2 from "../../assets/images/line2.svg";
import signphone from "../../assets/images/signphone.svg";
import globe from "../../assets/images/globe.svg";
import yinyang from "../../assets/images/yinyang.svg";
import link from "../../assets/images/link.svg";
import calendar from "../../assets/images/calendar.svg";
import cart from "../../assets/images/cart.svg";
import goods from "../../assets/images/goods.svg";
import sharing from "../../assets/images/sharing.svg";
import chats from "../../assets/images/chats.svg";
import frames from "../../assets/images/frames.svg";
import frames2 from "../../assets/images/frames2.svg";
import frames3 from "../../assets/images/frames3.svg";
import frames4 from "../../assets/images/frames4.svg";
import uplink from "../../assets/images/uplink.svg";
import longline from "../../assets/images/longline.svg";

function Landing() {
  return (
    <div className={style.home}>
      <div className={style.content1}>
        <NavHome className={style.nav} />
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
      </div>
      <div className={style.content2}>
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
      </div>
      <div className={style.content3}>
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
      </div>
      <div className={style.content4}>
        <div className={style.content4_inside}>
          <div className={style.content4_main_title}>
            Apa Saja  yang Dapat Anda Buat?
          </div>
          <div className={style.content4_container}>
            <div type="box" className={style.content4_box}>
              <div className={style.benefits}>
                <img src={link} alt="" className={style.creationicon} />
              </div>
              <div className={style.content4_boxtitle}>
                Link
              </div>
            </div>
            <div type="box" className={style.content4_box}>
              <div className={style.benefits}>
                <img src={calendar} alt="" className={style.creationicon} />
              </div>
              <div className={style.content4_boxtitle}>
                Event
              </div>
            </div>
            <div type="box" className={style.content4_box}>
              <div className={style.benefits}>
                <img src={cart} alt="" className={style.creationicon} />
              </div>
              <div className={style.content4_boxtitle}>
                Digital Product
              </div>
            </div>
            <div type="box" className={style.content4_box}>
              <div className={style.benefits}>
                <img src={goods} alt="" className={style.creationicon} />
              </div>
              <div className={style.content4_boxtitle}>
                Physical Product
              </div>
            </div>
            <div type="box" className={style.content4_box}>
              <div className={style.benefits}>
                <img src={sharing} alt="" className={style.creationicon} />
              </div>
              <div className={style.content4_boxtitle}>
                Support and Donation
              </div>
            </div>
            <div type="box" className={style.content4_box}>
              <div className={style.benefits}>
                <img src={chats} alt="" className={style.creationicon} />
              </div>
              <div className={style.content4_boxtitle}>
                Chat Subscription
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.content5}>
        <div className={style.content5_inside}>
          <div className={style.content5_right}>
            <div className={style.content5_title1}>
              Buat Website Anda
            </div>
            <div className={style.content5_title2}>
              Cukup 1 Menit
            </div>
            <div className={style.content5_container}>
              <div className={style.content5_box}>
                Ada banyak Pilihan Template yang bisa Anda gunakan untuk membuat website simple dan Powerfull untuk Semua kebutuhan Link Bisnis Anda
              </div>
            </div>
          </div>
          <div className={style.signphone}>
            <img src={frames} alt="" height={600}/>
          </div>
        </div>
        <div className={style.content5_bottom_inside}>
          <div className={style.signphone}>
            <img src={frames2} alt="" height={600}/>
          </div>
          <div className={style.content5_bottom_right}>
            <div className={style.content5_bottom_title1}>
              Buat, Pasarkan, dan Jual
            </div>
            <div className={style.content5_bottom_title2}>
              Apapun Bisnis Anda
            </div>
            <div className={style.content5_bottom_container}>
              <div className={style.content5_bottom_box}>
                Ada banyak Pilihan Template yang bisa anda gunakan untuk membuat website simple dan Powerfull untuk Semua kebutuhan Link Bisnis Anda
              </div>
            </div>
          </div>
        </div>
        <div className={style.content5_inside}>
          <div className={style.content5_right}>
            <div className={style.content5_title1}>
              Laporan dan Statistik
            </div>
            <div className={style.content5_container}>
              <div className={style.content5_box}>
                Ada banyak Pilihan Template yang bisa Anda gunakan untuk membuat website simple dan Powerfull untuk Semua kebutuhan Link Bisnis Anda
              </div>
            </div>
          </div>
          <div className={style.signphone}>
            <img src={frames3} alt="" height={500}/>
          </div>
        </div>
      </div>
      <div className={style.content6}>
        <div className={style.content6_inside}>
          <div className={style.content6_right}>
            <div className={style.content6_container}>
              <div className={style.content6_container_bottom}>
                <div className={style.content6_leftmodals}>
                  <div className={style.content6_leftbanner}>
                    <div className={style.content6_duration}>
                      BULANAN
                    </div>
                    <div className={style.content6_price}>
                      49K
                    </div>
                    <div className={style.content6_pertime}>
                      Per Bulan
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Unlimited Link
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Digital Store
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Statistic / Traffic
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Link Thumbnail
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Templates
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Custom Fonts & Background
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      <div className={style.content6_leftmodals_feature1}>
                        Transaction
                      </div>
                      <div className={style.content6_leftmodals_feature2}>
                        Fee 2%
                      </div>
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      About Me
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Email Notification
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Export Data to CSV
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      FB Pixels
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Google Analytics
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      UTM Parameters
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Custom Meta Text (SEO)
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Request Payout Anytime
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Remove Uplink.id Logo
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Maximum File Size 5 GB
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Product Appearance
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_choose_area}>
                    <div className={style.content6_leftmodals_choose}>
                      Ambil Paket Ini
                    </div>
                  </div>
                </div>
                <div className={style.content6_leftmodals}>
                  <div className={style.content6_leftbanner}>
                    <div className={style.content6_duration}>
                      TAHUNAN
                    </div>
                    <div className={style.content6_price}>
                      450K
                    </div>
                    <div className={style.content6_pertime}>
                      Per Tahun
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Unlimited Link
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Digital Store
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Statistic / Traffic
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Link Thumbnail
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Templates
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Custom Fonts & Background
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      <div className={style.content6_leftmodals_feature1}>
                        Transaction
                      </div>
                      <div className={style.content6_leftmodals_feature2}>
                        Fee 1%
                      </div>
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      About Me
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Email Notification
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Export Data to CSV
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      FB Pixels
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Google Analytics
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      UTM Parameters
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Custom Meta Text (SEO)
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Request Payout Anytime
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Remove Uplink.id Logo
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Maximum File Size 5 GB
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Product Appearance
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_choose_area}>
                    <div className={style.content6_leftmodals_choose}>
                      Ambil Paket Ini
                    </div>
                  </div>
                </div>
                <div className={style.content6_leftmodals}>
                  <div className={style.content6_leftbanner}>
                    <div className={style.content6_duration}>
                      FREE FOREVER
                    </div>
                    <div className={style.content6_price}>
                      FREE
                    </div>
                    <div className={style.content6_pertime}>
                      One Time
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Unlimited Link
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Digital Store
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Statistic / Traffic
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Link Thumbnail
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Templates
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Custom Fonts & Background
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      <div className={style.content6_leftmodals_feature1}>
                        Transaction
                      </div>
                      <div className={style.content6_leftmodals_feature2}>
                        Fee 3%
                      </div>
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      About Me
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Email Notification
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Export Data to CSV
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_feature_area}>
                    <div className={style.content6_leftmodals_feature}>
                      Maximum File Size 100 MB
                    </div>
                  </div>
                  <div className={style.content6_leftmodals_choose_area}>
                    <div className={style.content6_leftmodals_choose}>
                      Ambil Paket Ini
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.content7}>
        <div className={style.content7_inside1}>
          <div className={style.content7_jumbotron}>
            <div className={style.content7_main_title}>
              Bergabunglah dengan Para Kreator
            </div>
            <div className={style.content7_main_description}>
              Entrepreneurs, Online Shop, Influencers, Lectures, Corporate, Hotel,
            </div>
            <div className={style.content7_main_description2}>
              Event Organizer dll
            </div>
          </div>
          <div className={style.content7_daftar}>
            <div className={style.content7_daftar_text}>
              DAFTAR SEKARANG
            </div>
          </div>
        </div>
        <div className={style.content7_inside2area}>
          <div className={style.content7_our_team}>
            OUR TEAM
          </div>
          <div className={style.content7_inside2_container}>
            <div className={style.content7_inside2}>
              <div className={style.content7_jumbotron2_joshua}>
                <div className={style.content7_main_title}>
                </div>
              </div>
              <div className={style.content7_profilearea}>
                <div className={style.content7_name}>
                  Joshua Kresno
                </div>
                <div className={style.content7_job}>
                  CEO
                </div>
              </div>
            </div>
            <div className={style.content7_inside2}>
              <div className={style.content7_jumbotron2_joe}>
                <div className={style.content7_main_title}>
                </div>
              </div>
              <div className={style.content7_profilearea}>
                <div className={style.content7_name}>
                  Joe Billy
                </div>
                <div className={style.content7_job}>
                  COO
                </div>
              </div>
            </div>
            <div className={style.content7_inside2}>
              <div className={style.content7_jumbotron2_yosia}>
                <div className={style.content7_main_title}>
                </div>
              </div>
              <div className={style.content7_profilearea}>
                <div className={style.content7_name}>
                  Yosia Gabriel
                </div>
                <div className={style.content7_job}>
                  CFO
                </div>
              </div>
            </div>
            <div className={style.content7_inside2}>
              <div className={style.content7_jumbotron2_timotius}>
                <div className={style.content7_main_title}>
                </div>
              </div>
              <div className={style.content7_profilearea}>
                <div className={style.content7_name}>
                  Timotius Fabian
                </div>
                <div className={style.content7_job}>
                  CMO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.content8}>
        <div className={style.content8_bottom_inside}>
          <div className={style.signphone}>
            <img src={frames4} alt="" height={600}/>
          </div>
          <div className={style.content8_bottom_right}>
            <div className={style.content8_bottom_title1}>
              CONTACT US
            </div>
            <div className={style.content8_bottom_container}>
              <div className={style.content8_bottom_box}>
                Silahkan isi Nama dan Email anda di bawah ini, kami akan mengubungi anda segera
              </div>
            </div>
            <form className={style.contactForm}>
              <label className={style.contactLabel}>
                <input type="text" placeholder="Name" className={style.contactInput} />
                <input type="text" placeholder="Email" className={style.contactInput} />
              </label>
              <button className={style.buttonContact}>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div className={style.content9}>
        <div className={style.content9_inside}>
          <div className={style.uplinklogo}>
            <img src={uplink} alt="" height={100}/>
          </div>
          <div className={style.options_container}>
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
          </div>
          <div className={style.signphone}>
            <img src={longline} alt="" width={1000}/>
          </div>
          <div className={style.copyright}>
            © Copyright 2021 Uplink.id- All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
