import React from "react";
import "./style/HowToPay.scss";

function HowToPay() {
  return (
    <div className="container_xy2">
      <div className="tab_xy2">
        <input className="input_xy2" type="checkbox" id="chck1" />
        <div className="tabTitle_xy2">
          <label class="tabLabel_xy2" for="chck1">
            How To Pay
          </label>
        </div>
        <div className="tabContent_xy2">
          <ol>
            <li>masukkan kartu</li>
            <li>lakukan pembayaran</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default HowToPay;
