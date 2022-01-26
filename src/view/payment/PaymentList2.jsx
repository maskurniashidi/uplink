import React from "react";
import style from "./style/PaymentList.module.css";
import "./payment.scss";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
//component
import PreviousNav from "../../components/nav/PreviousNav";
function PaymentList() {
  return (
    <div className="paymentList">
      <PreviousNav name="Payment Method" className={style.nav} />
      <div className="content">
        <h5 className="title">Payment Option</h5>
        <div class="container">
          <div class="tab">
            <input type="checkbox" id="chck1" />
            <label class="tab-label" for="chck1">
              Kegiatan Terkait
            </label>
            <div class="tab-content">
              <div class="boxes-events">
                <div class="evote-event" to="/RegisDPTPage">
                  <i class="fas fa-user-friends"></i>
                  <div class="content">
                    <h4>Pendaftaran DPT</h4>
                    <p>Daftarkan akun anda agar terdaftar sebagai DPT Suksesi HIMIT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentList;
