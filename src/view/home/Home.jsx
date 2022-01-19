import React from "react";
import style from "./Home.module.css";

//component
import NavSearch from "../../components/nav/NavSearch";
import BottomNav from "../../components/nav/BottomNav";
import Company from "../../components/company/Company";
import ProductContainer from "../../components/products/ProductContainer";

function Home() {
  return (
    <div className={style.home}>
      <NavSearch className={style.nav} />
      <div className={style.content}>
        <Company className={style.companyHeader} />
        <ProductContainer />
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
