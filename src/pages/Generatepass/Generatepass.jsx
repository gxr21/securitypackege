import React, { useState } from "react";
import "./Generatepass.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";

function Generatepass() {
    const [password, setPassword] = useState(""); // State to store the generated password

    const generatePassword = () => {
        const name = document.getElementById("name").value.trim();
        const includeNumbers = document.getElementById("number").checked;
        const includeLetters = document.getElementById("letter").checked;
        const includeSpecialChars = document.getElementById("char").checked;
        const passwordLength = parseInt(document.getElementById("length-password").value);
    
        // Validation
        if (!name) {
            alert("Please enter your name.");
            return;
        }
        if (isNaN(passwordLength) || passwordLength <= name.length) {
            alert("Password length must be greater than the name length.");
            return;
        }
        if (!includeNumbers && !includeLetters && !includeSpecialChars) {
            alert("Please select at least one option for the password.");
            return;
        }
    
        // Character pools
        const numbers = "0123456789";
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?/`~";
    
        let charPool = "";
        if (includeNumbers) charPool += numbers;
        if (includeLetters) charPool += letters;
        if (includeSpecialChars) charPool += specialChars;
    
        const remainingLength = passwordLength - name.length;
        const firstPartLength = Math.floor(remainingLength / 2);
        const secondPartLength = remainingLength - firstPartLength;
    
        let firstPart = "";
        let secondPart = "";
    
        for (let i = 0; i < firstPartLength; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            firstPart += charPool[randomIndex];
        }
    
        for (let i = 0; i < secondPartLength; i++) {
            const randomIndex = Math.floor(Math.random() * charPool.length);
            secondPart += charPool[randomIndex];
        }
    
        const generatedPassword = firstPart + name + secondPart;
        setPassword(generatedPassword); // Update state with the generated password
    };
    return (
        <div style={{ height: "100vh" }}>
            <Header />
            <br />
            <Card className="theHigth">
                <div className="col blue-placement">
                    <div className="img-cont">
                        <img src="/imgs/pc.png" className="image" alt="PC Image" />
                        <img src="/imgs/lock.png" className="image" alt="Lock Image" />
                        <img src="/imgs/pass.png" className="image" alt="Password Image" />
                        <img src="/imgs/key.png" className="image" alt="Key Image" />
                        <img src="/imgs/true.png" className="image" alt="Checkmark Image" />
                    </div>
                </div>
                <div className="col px-5 pt-5 noLeft" style={{ width: "90%" }}>
                    {/* Title and Subtitle */}
                    <Title
                        text="GENERATE PASSWORD"
                        desc="Enter information to generate password!"
                        className="padoftit"
                    />
                    {/* Generate password From Name Input Field */}
                    <div className="d-flex flex-column py-2">
                        <p>Enter your Name</p>
                        <input type="text" id="name" />
                    </div>
                    {/* Checkbox options */}
                    <p id="p1">Do you want the following in the password?</p>
                    <div className="checkinfo">
                        <input type="checkbox" id="number" />
                        <p style={{ marginBottom: "0px" }}> Password with numbers</p>
                    </div>
                    <div className="checkinfo">
                        <input type="checkbox" id="letter" />
                        <p style={{ marginBottom: "0px" }}> Password with letters</p>
                    </div>
                    <div className="checkinfo">
                        <input type="checkbox" id="char" />
                        <p style={{ marginBottom: "0px" }}> Password with special character</p>
                    </div>
                    <div className="checkinfo">
                        <p>Password length:</p>
                        <input type="number" className="lengthofinput" id="length-password" />
                    </div>
                    {/* Submit Button */}
                    <button className="Submit mb-5" onClick={generatePassword}>
                        OK
                    </button>
                    {/* Password Input Field */}
                    <div className="d-flex flex-column pb-4">
                        <label htmlFor="password" className="input-title">
                            Your new password
                        </label>
                        <input type="text" id="password" value={password} readOnly />
                    </div>
                </div>
            </Card>
            <Footer />
        </div>
    );
}

export default Generatepass;
