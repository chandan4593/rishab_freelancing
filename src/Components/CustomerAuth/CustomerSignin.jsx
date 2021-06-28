import React, { useState } from "react";
import "./CustomerSignin.scss";
import {useHistory} from "react-router-dom";
import {Baseurl,Graphql} from "../../App";
import axios from "axios";

const CustomerSignin = () => {
    const H = useHistory();
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

    const [data,setdata] = React.useState({
        email:"",
        password:"",

    });

    const [data1,setdata1] = React.useState({
        email:"",
        password:"",
        conformpassword:""
    });
    const loginChange = (e) => {
        setdata((pre)=>{
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }

    const registerChange = (e) => {
        setdata1((pre)=>{
            return {
                ...pre,
                [e.target.name]: e.target.value
            }
        })
    }
    const login = async () => {
        console.log(data);
        try{
            const result = await axios({
                method:"post",
                url:`${Baseurl}/userLogIn`,
                data
            });
            console.log(result);
            H.push("/shop");
            localStorage.setItem("username",data.email);
            localStorage.setItem("password",data.password)
        }catch(error){
            console.log(error);
        }
    }
    const register = async () => {
        console.log(data1);
        try{
            const result = await axios({
                method:"post",
                url:`${Baseurl}/userSignIn`,
                data:data1
            });
            console.log(result);
            H.push("/shop");
            localStorage.setItem("username",data1.email);
            localStorage.setItem("password",data1.password)
        }catch(error){
            console.log(error);
        }
    }
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
                            className={`login ${loginFromSlide} ${signinFromSlide}`}
                        >
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    required
                                    value={data.email}
                                    name="email"
                                    onChange={loginChange}
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={data.password}
                                    name="password"
                                    onChange={loginChange}
                                ></input>
                            </div>
                            <div className="field btn" onClick={login}>
                                <div className="btn-layer">Login</div>
                                <button value="Login" ></button>
                            </div>
                        </form>
                        <form action="#" className={`signup`}>
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    required
                                    value={data1.email}
                                    name="email"
                                    onChange={registerChange}
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={data1.password}
                                    name="password"
                                    onChange={registerChange}
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    required
                                    value={data1.conformpassword}
                                    name="conformpassword"
                                    onChange={registerChange}
                                ></input>
                            </div>
                            <div className="field btn" onClick={register}>
                                <div className="btn-layer">Signup</div>
                                <button value="Signup"></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSignin;
