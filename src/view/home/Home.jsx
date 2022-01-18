import React from "react";
import style from "./Home.module.css";

//component
import NavSearch from "../../components/nav/NavSearch";

function Home() {
  return (
    <div className={style.home}>
      <NavSearch className={style.nav} />
      <div className={style.content}>
        <h1>halo</h1>
      </div>
    </div>
  );
}

export default Home;
