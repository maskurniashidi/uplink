import React from "react";
import style from "./LandingNew.module.css";

//component
import Content1 from "../../components/landingcomponents/content1/Content1";
import Content2 from "../../components/landingcomponents/content2/Content2";
import Content3 from "../../components/landingcomponents/content3/Content3";

function LandingNew() {
  return (
    <div className={style.home}>
        <Content1/>
        <Content2/>
        <Content3/>
    </div>
  );
}

export default LandingNew;
