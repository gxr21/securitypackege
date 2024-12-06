import React from 'react';
import './Signup.css';
import InputAuth2 from '../../components/InputAuth2/InputAuth2';
import ButtonAuth from '../../components/ButtonAuth/ButtonAuth';
import Card from '../../components/Card/Card';
import { useState } from 'react';
import { postData } from '../../utils/utils';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const data = { name, email, password };
            const response = await postData('/api/authentication/createAccount', data); // Replace with your endpoint
            console.log('Response:', response); // Log the server's response
        } catch (err) {
            console.error('Error during signup:', err); // Log the error
        }
    };
    return (
        <Card>
            <div className="col pt-4 px-3 m-4" >
                {/* Title and Subtitle */}
                <p className="title-2">Sign Up</p>
                <label htmlFor="name" className="input-title-2 mb-2">Create a NEW account</label>
                {/* Input Fields */}
                <InputAuth2
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                />
                <InputAuth2
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputAuth2
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Signup Button */}
                <ButtonAuth
                    text="Sign Up"
                    onClick={handleSignup}
                />
            </div>

            <div className="col px-0 blue-placement-2 ">
                <div className="img-cont-2">
                    <img src="/imgs/pc.png" className="image-2" alt="PC Image" />
                    <img src="/imgs/lock.png" className="image-2" alt="Lock Image" />
                    <img src="/imgs/pass.png" className="image-2" alt="Password Image" />
                    <img src="/imgs/key.png" className="image-2" alt="Key Image" />
                    <img src="/imgs/true.png" className="image-2" alt="Checkmark Image" />
                </div>
            </div>
        </Card>
    );
};

export default Signup;
