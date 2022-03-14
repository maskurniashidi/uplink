import React from "react";
import style from "./Faq.module.css";

//component
import NavHome from "../../components/nav/NavHome";
import Footer from "../../components/footer/Footer";

function Faq() {
  return (
    <div className={style.faq}>
      <div className={style.navbarContainer}>
        <NavHome/>
      </div>
      <div className={style.contentContainer}>
        Isinya mas ryan
      </div>
      <div className={style.footerContainer}>
        <Footer/>
      </div>
    </div>
  );
}

export default Faq;
