import React from 'react';
import "./DeliveryBoyLogin.scss";
import axios from "axios";
import {Baseurl} from "../../App";
import { useHistory } from 'react-router';

const DeliveryBoyLogin = () => {
    const H = useHistory();
    const [data,setdata] = React.useState({
        email:"",
        password:""
    })
    const signin = async () => {
        console.log("insignin");
        try{
            const result = await axios({
                url:`${Baseurl}/postDeliveryBoyLogIn`,
                method:"post",
                headers:{
                    accept:"application/json",
                    "Content-Type":"application/json"
                },
                data
            });
            console.log(result.data);
            localStorage.setItem("username",data.email);
            localStorage.setItem("password",data.password);
            H.push("/delivery");
        }catch(error){
            console.log(error);
        }
    }
    const handleChange = (e) => {
        setdata((pre)=>{
            return {
                ...pre,
                [e.target.name]:e.target.value
            }
        })
    }
    return (
        <div className="DeliveryBoyLogin">
            <div class="container">
                <div class="card">
                    <h1 class="card-title">Hello Agent!</h1>
                    <small class="card-subtitle">
                        Enter your credentials and get access
                    </small>
                    <div action="" class="card-form">
                        <label for="username">Username</label>
                        <div class="card-input-container username">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                id="email"
                                name="email"
                                onChange={handleChange}
                            ></input>
                        </div>
                        <label for="password">Password</label>
                        <div class="card-input-container password">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                            ></input>
                        </div>
                        <button class="card-button" onClick={signin}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeliveryBoyLogin;