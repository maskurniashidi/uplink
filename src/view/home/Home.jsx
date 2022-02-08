import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';

//component
import NavSearch from "../../components/nav/NavSearch";
import BottomNav from "../../components/nav/BottomNav";
import Company from "../../components/company/Company";
import ProductContainer from "../../components/products/ProductContainer";

import env from '../../environment';

function Home() {
  let { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const getProfile = () => {
    console.log('getting data');
    axios.post(`${env.baseUrl}/api/user/profile/${username}`)
    .then(response => {
      let res = response.data;
      setProfile(res.user)
      if (res.user == null) {
        // 
      }
      setLoading(false);
      console.log(res);
    })
  }

  useEffect(() => {
    if (profile == null) {
      console.log('jalan');
      getProfile();
    }
  }, []);

  return (
    <div className={style.home}>
      {
        isLoading ?
        <div>Loading...</div>
        :
        <React.Fragment>
          {
            profile == null ?
            <Redirect to="/404" />
            :
            <div>
              <NavSearch className={style.nav} />
              <div className={style.content}>
                <Company className={style.companyHeader} profile={profile} />
                <ProductContainer profile={profile} />
              </div>
              <BottomNav />
            </div>

          }
        </React.Fragment>
      }
    </div>
  );
}

export default Home;
