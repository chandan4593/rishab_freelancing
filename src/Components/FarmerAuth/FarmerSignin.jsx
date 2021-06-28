import React, {useState} from 'react';
import "./FarmerSignin.scss";
import axios from "axios";
import {Baseurl} from "../../App";
import { useHistory } from 'react-router-dom';

const FarmerSignin = () => {
    const H = useHistory();
    const [loginFromSlide, setloginFromSlide] = useState("");
    const [signinFromSlide, setsigninFromSlide] = useState("");
    const [singinTextSlide, setsinginTextSlide] = useState("");
    const [loginTextSlide, setloginTextSlide] = useState("");
    const [login,setlogin] = useState({
        email:"",
        password:""
    });
    const [register,setregister] = useState({
        email:"",
        password:"",
        conformpassword:""
    });
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
    const handleLoginChange = (e) => {
        setlogin((pre)=>{
            return {
                ...pre,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleRegisterChange = (e) => {
        setregister((pre)=>{
            return {
                ...pre,
                [e.target.name]:e.target.value
            }
        });
    } 
    const loginfunc = async () => {
        console.log(login);
        try{
            const result = await axios({
                method:"post",
                url:`${Baseurl}/farmerLogin`,
                headers:{
                    "Content-type": "application/json",
                    accept:"application/json"
                },
                data:login
            });
            console.log(result);
            localStorage.setItem("username",login.email);
            localStorage.setItem("password",login.password); 
            H.push("/farmers");
        }catch(error){
            console.log(error);
        }
    }
    const registerfunc = async () => {
        console.log(register);
        try{
            const result = await axios({
                method:"post",
                url:`${Baseurl}/farmerSignUp`,
                headers:{
                    "Content-type": "application/json",
                    accept:"application/json"
                },
                data:register
            });
            console.log(result);
            localStorage.setItem("username",register.email);
            localStorage.setItem("password",register.password); 
            H.push("/farmers");
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div className="farmerSignin">
            <div className="wrapper">
                <div className="title-text">
                    <div className={`title login ${loginTextSlide}`}>
                        Hello Farmer!
                    </div>
                    <div className={`title signup ${singinTextSlide}`}>
                        <span
                            style={{
                                display: "block",
                            }}
                        >
                            Welcome 🙏
                        </span>
                        <span>Farmer</span>
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
                                    onChange={handleLoginChange}
                                    required
                                    value={login.email}
                                    name="email"
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    value={login.password}
                                    onChange={handleLoginChange}
                                    placeholder="Password"
                                    name="password"
                                    required
                                ></input>
                            </div>
                            <div className="field btn" onClick={loginfunc} >
                                <div className="btn-layer">Login</div>
                                <button 
                                    onClick={loginfunc} 
                                >Login</button>
                            </div>
                        </form>
                        <form  className={`signup`}>
                            <div className="field">
                                <input
                                    type="text"
                                    placeholder="Email Address"
                                    name="email"
                                    value={register.email}
                                    onChange={handleRegisterChange}
                                    required
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleRegisterChange}
                                    value={register.password}
                                    required
                                ></input>
                            </div>
                            <div className="field">
                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    name="conformpassword"
                                    onChange={handleRegisterChange}
                                    value={register.conformpassword}
                                    required
                                ></input>
                            </div>
                            <div className="field btn" onClick={registerfunc} >
                                <div className="btn-layer">register</div>
                                <button 
                                    onClick={registerfunc} 
                                >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmerSignin;
