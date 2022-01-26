import React from "react";
import "./style/paymentList.scss";
//component
import PreviousNav from "../../components/nav/PreviousNav";
import { BiTransfer } from "react-icons/bi";
function PaymentList() {
  return (
    <div className="paymentList_xy1">
      <PreviousNav name="Payment Method" className="nav_xy1" />
      <div className="content_xy1">
        <h5 className="title_xy1">Payment Option</h5>
        {/* bank payment */}
        <div className="container_xy1">
          <div className="tab_xy1">
            <input className="input_xy1" type="checkbox" id="chck1" />
            <div className="tabTitle_xy1">
              <BiTransfer className="iconBank_xy1" />
              <label class="tabLabel_xy1" for="chck1">
                Bank Payment
              </label>
            </div>
            <div className="tabContent_xy1">
              <div className="boxesEvents_xy1">
                <div className="bankEvent_xy1">
                  <img src="https://play-lh.googleusercontent.com/ggZzVVDWsTm7gSnVl8m3cNFgoeUN2r7dhAZdB8lz0d_s6ZcYOkvUQdbG3dPU5LHZnWvc" alt="bank bca" className="bankImage" />
                  <div className="contentSelect_xy1">
                    <label for="html">BCA</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                  </div>
                </div>
                <div className="bankEvent_xy1">
                  <img src="https://play-lh.googleusercontent.com/ggZzVVDWsTm7gSnVl8m3cNFgoeUN2r7dhAZdB8lz0d_s6ZcYOkvUQdbG3dPU5LHZnWvc" alt="bank bca" className="bankImage" />
                  <div className="contentSelect_xy1">
                    <label for="html">BNI</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* credit card */}
        <div className="container_xy1">
          <div className="tab_xy1">
            <input className="input_xy1" type="checkbox" id="chck2" />
            <div className="tabTitle_xy1">
              <BiTransfer className="iconBank_xy1" />
              <label class="tabLabel_xy1" for="chck2">
                Credit Card
              </label>
            </div>
            <div className="tabContent_xy1">
              <div className="boxesEvents_xy1">
                <div className="bankEvent_xy1">
                  <img src="https://play-lh.googleusercontent.com/ggZzVVDWsTm7gSnVl8m3cNFgoeUN2r7dhAZdB8lz0d_s6ZcYOkvUQdbG3dPU5LHZnWvc" alt="bank bca" className="bankImage" />
                  <div className="contentSelect_xy1">
                    <label for="html">BCA</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                  </div>
                </div>
                <div className="bankEvent_xy1">
                  <img src="https://play-lh.googleusercontent.com/ggZzVVDWsTm7gSnVl8m3cNFgoeUN2r7dhAZdB8lz0d_s6ZcYOkvUQdbG3dPU5LHZnWvc" alt="bank bca" className="bankImage" />
                  <div className="contentSelect_xy1">
                    <label for="html">BNI</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* E-Wallet */}
        <div className="container_xy1">
          <div className="tab_xy1">
            <input className="input_xy1" type="checkbox" id="chck3" />
            <div className="tabTitle_xy1">
              <BiTransfer className="iconBank_xy1" />
              <label class="tabLabel_xy1" for="chck3">
                E-Wallet
              </label>
            </div>
            <div className="tabContent_xy1">
              <div className="boxesEvents_xy1">
                <div className="bankEvent_xy1">
                  <img src="https://play-lh.googleusercontent.com/ggZzVVDWsTm7gSnVl8m3cNFgoeUN2r7dhAZdB8lz0d_s6ZcYOkvUQdbG3dPU5LHZnWvc" alt="bank bca" className="bankImage" />
                  <div className="contentSelect_xy1">
                    <label for="html">BCA</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                  </div>
                </div>
                <div className="bankEvent_xy1">
                  <img src="https://play-lh.googleusercontent.com/ggZzVVDWsTm7gSnVl8m3cNFgoeUN2r7dhAZdB8lz0d_s6ZcYOkvUQdbG3dPU5LHZnWvc" alt="bank bca" className="bankImage" />
                  <div className="contentSelect_xy1">
                    <label for="html">BNI</label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
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
