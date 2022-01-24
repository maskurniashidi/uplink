import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import style from "./Event.module.css";
//component
import PreviousNav from "../../components/nav/PreviousNav";
import { MdDateRange } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoIosPricetag } from "react-icons/io";
function Event() {
  return (
    <div className={style.event}>
      <PreviousNav name="Event" className={style.nav} />
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
        <div className={style.detailText}>
          <p className={style.tag}>You are invited to join</p>
          <div className={style.topTitle}>
            <h5 className={style.title}>Erros Chrisye Yockie</h5>
            <div className={style.available}>100 Left</div>
          </div>
          <div className={style.date}>
            <MdDateRange className={style.dateIcon} />
            <p className={style.dateValue}>Friday, 14 October 2021</p>
          </div>
          <div className={style.clock}>
            <AiOutlineClockCircle className={style.clockIcon} />
            <p className={style.clockValue}>08.00 AM - 09.00 GMT+7</p>
          </div>
          <div className={style.price}>
            <IoIosPricetag className={style.priceIcon} />
            <p className={style.priceValue}>Rp. 20.000</p>
          </div>
          <p className={style.descriptionTag}>Description</p>
          <p className={style.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet nisl, quis eget feugiat mauris nibh consectetur at. Vel blandit tristique ac ac dapibus. Vivamus porttitor egestas duis lobortis in scelerisque suspendisse. Nibh
            ipsum porta nisi, odio tempus, gravida ultrices vitae. Eget auctor interdum sit purus est.{" "}
          </p>
        </div>
      </div>
      <div className={style.wantContainer}>
        <Link to={"/checkout"} className={style.btnWantThis}>
          I WANT THIS
        </Link>
      </div>
    </div>
  );
}

export default Event;
