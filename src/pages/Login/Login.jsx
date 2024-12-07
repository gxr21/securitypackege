import React, { useState } from 'react';
import "./Login.css";
import InputAuth from '../../components/InputAuth/InputAuth';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import { postData } from '../../../serverAPI/serverAPI';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = { email, password };
            const response = await postData('/api/authentication/logToAccount', data); // Replace '/login' with your endpoint
            if (response.state === 'success') {
                // Store JWT in localStorage
                const user = { token: response.data.JWT };
                localStorage.setItem('user', JSON.stringify(user));
                navigate('/')
            }
        } catch (err) {
            console.error('Login Error:', err); // Log errors
        }
    };

    return (
        <Card >
            {/* Left Column */}
            <div className="col blue-placement">
                <div className="img-cont">
                    <img src="/imgs/pc.png" className="image" alt="PC Image" />
                    <img src="/imgs/lock.png" className="image" alt="Lock Image" />
                    <img src="/imgs/pass.png" className="image" alt="Password Image" />
                    <img src="/imgs/key.png" className="image" alt="Key Image" />
                    <img src="/imgs/true.png" className="image" alt="Checkmark Image" />
                </div>
            </div>
            {/* Right Column */}
            <div className="col px-5 pt-5 noLeft">
                <div style={{ width: "90%" }}>
                    {/* Title */}
                    <Title
                        text="LOGIN"
                        desc="Welcome back!"
                    />

                    {/* Email Input */}
                    <InputAuth
                        label="Email"
                        type="text"
                        id="Emailphone"
                        className="py-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                    />

                    {/* Password Input */}
                    <InputAuth
                        label="Password"
                        type="password"
                        id="password"
                        className="pb-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                    />

                    {/* Login Button */}
                    <ButtonAuth
                        text="Login"
                        onClick={handleLogin} // Call handleLogin on click
                    />

                    {/* Forgot Password Link */}
                    <div>
                        <a href="/Change" className="link"> Did you forget the password? </a>
                    </div>
                    <div>
                        <a href="/signup" className="link"> creat a new account? </a>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Login;
