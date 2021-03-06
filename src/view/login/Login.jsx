import React from "react";
import { Link } from 'react-router-dom'
import style from "./Login.module.css";

//assets
import Google from "../../assets/images/googleaccount.svg";
import Facebook from "../../assets/images/facebookaccount.svg";

function Login() {
  return (
    <div className={style.login}>
        <div className={style.loginRightContainer}>
            <div className={style.loginRightContainerInner}>
                <div className={style.loginRightTitle}>
                    Sign In to Uplink
                </div>
                <div className={style.loginRightIcons}>
                    <div className={style.googleAccount}>
                        <img src={Google} alt="" className={style.loginIcon} />
                    </div>
                    <div className={style.facebookAccount}>
                        <img src={Facebook} alt="" className={style.loginIcon} />
                    </div>
                </div>
                <div className={style.loginRightText}>
                    or use your email for registration
                </div>
                <div className={style.loginRightInput}>
                    <form className={style.loginRightregisterForm}>
                        <label className={style.loginRightregisterLabel}>
                            <input type="text" placeholder="Email" className={style.loginRightregisterInput} />
                        </label>
                    </form>
                    <form className={style.loginRightregisterForm}>
                        <label className={style.loginRightregisterLabel}>
                            <input type="text" placeholder="Password" className={style.loginRightregisterInput} />
                        </label>
                    </form>
                </div>
                <div className={style.buttonSignupContainer}>
                    <Link to="/"><button className={style.buttonSignup}>LOGIN</button></Link>
                </div>
            </div>
        </div>
        <div className={style.loginLeftContainer}>
            <div className={style.loginLeftContainerInner}>
                <div className={style.loginLeftTitle}>
                    Hello, Friend!
                </div>
                <div className={style.loginLeftDescription}>
                    Enter your personal details and start journey with us
                </div>
                <div className={style.loginLeftButtonContainer}>
                    <Link to="/register"><button className={style.buttonSwapLogin}>SIGN UP</button></Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;
