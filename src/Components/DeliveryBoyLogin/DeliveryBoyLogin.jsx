import React from 'react';
import "./DeliveryBoyLogin.scss"

const DeliveryBoyLogin = () => {
    return (
        <div className="DeliveryBoyLogin">
            <div class="container">
                <div class="card">
                    <h1 class="card-title">Hello Agent!</h1>
                    <small class="card-subtitle">
                        Enter your credentials and get access
                    </small>
                    <form class="card-form">
                        <label for="username">Username</label>
                        <div class="card-input-container username">
                            <input
                                type="text"
                                placeholder="Enter your username"
                                id="username"
                            ></input>
                        </div>
                        <label for="password">Password</label>
                        <div class="card-input-container password">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                id="password"
                            ></input>
                        </div>
                        <button class="card-button">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DeliveryBoyLogin;