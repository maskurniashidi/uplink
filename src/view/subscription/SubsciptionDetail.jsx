import React from "react";
import { Link } from "react-router-dom";
import style from "./SubscriptionDetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
//component
import PreviousNav from "../../components/nav/PreviousNav";
import { FaShare } from "react-icons/fa";

function SubsciptionDetail() {
  return (
    <div className={style.subscriptionDetail}>
      <PreviousNav name="Chat Subscription" className={style.nav} />
      <div className={style.content}>
        <Carousel autoFocus={true} showThumbs={false} showStatus={false} useKeyboardArrows className="presentation-mode">
          <div className={style.imageBox}>
            <img className={style.imageSub} src="https://media.istockphoto.com/photos/support-button-on-computer-keyboard-picture-id1146854142?k=20&m=1146854142&s=612x612&w=0&h=Ki-Y3Yeu5chEqJDv5cTCi1mWbJWN82D9ssn71-x8wSs=" />
          </div>
          <div className={style.imageBox}>
            <img className={style.imageSub} src="https://media.istockphoto.com/photos/support-button-on-computer-keyboard-picture-id1146854142?k=20&m=1146854142&s=612x612&w=0&h=Ki-Y3Yeu5chEqJDv5cTCi1mWbJWN82D9ssn71-x8wSs=" />
          </div>
          <div className={style.imageBox}>
            <img className={style.imageSub} src="https://media.istockphoto.com/photos/support-button-on-computer-keyboard-picture-id1146854142?k=20&m=1146854142&s=612x612&w=0&h=Ki-Y3Yeu5chEqJDv5cTCi1mWbJWN82D9ssn71-x8wSs=" />
          </div>
        </Carousel>
        <div className={style.price}>Rp. 20.000</div>
        <div className={style.topTitle}>
          <h5 className={style.title}>Nama Chat Subscription</h5>
          <FaShare className={style.shareIcon} />
        </div>
        <p className={style.subsDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tortor vitae facilisis gravida tellus sed lorem ultrices. At ultrices lorem leo malesuada.</p>
      </div>
      <div className={style.wantContainer}>
        <Link to={"/checkout"} className={style.btnWantThis}>
          I WANT THIS
        </Link>
      </div>
    </div>
  );
}

export default SubsciptionDetail;
