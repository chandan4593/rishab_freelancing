import React, { useState } from "react";
import "./CustomerSignin.scss";

const CustomerSignin = () => {
    const [loginFromSlide, setloginFromSlide] = useState("");
    const [signinFromSlide, setsigninFromSlide] = useState("");
    const [singinTextSlide, setsinginTextSlide] = useState("");
    const [loginTextSlide, setloginTextSlide] = useState("");

    const signUpBUttonToggler = () => {
        setloginFromSlide("loginSlide");
        setsigninFromSlide("");
    };

    const loginBUttonToggler = () => {
        setloginFromSlide("");
        setsigninFromSlide("signinSlide");
    };

    const signinTextToggler = () => {
        setsinginTextSlide("siginTextSlide");
        setloginTextSlide("");
    };
    
    const loginTextToggler = () => {
        setsinginTextSlide("");
        setloginTextSlide("loginTextSlide");
    };

    return (
        <div className="customersignin">
            <div className="wrapper">
                <div className="title-text">
                    <div className={`title login ${loginTextSlide}`}>
                        Hello Again!
                    </div>
                    <div className={`title signup ${singinTextSlide}`}>
                        Welcome 🙏
                    </div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input
                            type="radio"
                            name="slide"
                            id="login"
                            checked
                        ></input>
                        <input type="radio" name="slide" id="signup"></input>
                        <label
                            for="login"
                            className="slide login"
                            onClick={() => {
                                loginBUttonToggler();
                                signinTextToggler();
                            }}
                        >
                            Login
                        </label>
                        <label
                            for="signup"
                            className="slide signup"
                            onClick={(e) => {
                                signUpBUttonToggler();
                                loginTextToggler();
                            }}
                        >
                            Signup
                        </label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form
                            action="#"
                            className={`login ${loginFromSlide} ${signinFromSlide}`}
                        >
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    required
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                ></input>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login"></input>
                            </div>
                        </form>
                        <form action="#" className={`signup`}>
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    required
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                ></input>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSignin;
