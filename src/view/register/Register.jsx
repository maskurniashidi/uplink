import React from "react";
import { Link } from 'react-router-dom'
import style from "./Register.module.css";

//assets
import Google from "../../assets/images/googleaccount.svg";
import Facebook from "../../assets/images/facebookaccount.svg";

function Register() {
  return (
    <div className={style.login}>
        <div className={style.loginLeftContainer}>
            <div className={style.loginLeftContainerInner}>
                <div className={style.loginLeftTitle}>
                    Welcome Back!
                </div>
                <div className={style.loginLeftDescription}>
                    To keep connected with us pelase login with your personal info
                </div>
                <div className={style.loginLeftButtonContainer}>
                    <Link to="/login"><button className={style.buttonSwapLogin}>LOGIN</button></Link>
                </div>
            </div>
        </div>
        <div className={style.loginRightContainer}>
            <div className={style.loginRightContainerInner}>
                <div className={style.loginRightTitle}>
                    Create Account
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
                            <input type="text" placeholder="uplink.id/" className={style.loginRightregisterInput} />
                        </label>
                    </form>
                    <form className={style.loginRightregisterForm}>
                        <label className={style.loginRightregisterLabel}>
                            <input type="text" placeholder="Telp" className={style.loginRightregisterInput} />
                        </label>
                    </form>
                    <form className={style.loginRightregisterForm}>
                        <label className={style.loginRightregisterLabel}>
                            <input type="text" placeholder="Password" className={style.loginRightregisterInput} />
                        </label>
                    </form>
                    <form className={style.loginRightregisterForm}>
                        <label className={style.loginRightregisterLabel}>
                            <input type="text" placeholder="uplink.id/" className={style.loginRightregisterInput} />
                        </label>
                    </form>
                </div>
                <div className={style.buttonSignupContainer}>
                    <Link to="/login"><button className={style.buttonSignup}>SIGN UP</button></Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;
