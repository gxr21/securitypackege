import React, { useState } from "react";
import "./Checkpass.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

function Checkpass() {
    const [strengthMessage, setStrengthMessage] = useState("");
    const [strengthClass, setStrengthClass] = useState("");

    const checkPasswordStrength = (password) => {
        // Define password strength criteria
        const strengthCriteria = [
            { regex: /.{8,}/, message: "At least 8 characters" }, // Minimum length
            { regex: /[a-z]/, message: "Lowercase letters" }, // Lowercase letters
            { regex: /[A-Z]/, message: "Uppercase letters" }, // Uppercase letters
            { regex: /\d/, message: "Numbers" }, // Numbers
            { regex: /[^a-zA-Z0-9]/, message: "Special characters" }, // Special characters
        ];

        // Check strength levels
        let strengthScore = 0;
        strengthCriteria.forEach((criteria) => {
            if (criteria.regex.test(password)) {
                strengthScore++;
            }
        });

        // Determine strength level and corresponding message/class
        if (strengthScore <= 2) {
            setStrengthMessage("Weak Password");
            setStrengthClass("weak");
        } else if (strengthScore === 3 || strengthScore === 4) {
            setStrengthMessage("Medium Strength Password");
            setStrengthClass("medium");
        } else if (strengthScore === 5) {
            setStrengthMessage("Strong Password");
            setStrengthClass("strong");
        } else {
            setStrengthMessage("");
            setStrengthClass("");
        }
    };

    return (
        <div style={{ height: "100vh" }}>
            <Header />
            <br />
            <Card>
                <div className="cer1"></div>
                <div className="col-12 d-flex flex-column align-items-center justify-content-center text-primary">
                    <h3 className="text-center bg-primary text-light">Checking Password</h3>
                    <p className="p1 mt-5">Enter your password to check</p>
                    <input
                        type="text"
                        required
                        className="check mt-2"
                        onChange={(e) => checkPasswordStrength(e.target.value)}
                    />
                    <p className={`p2 mt-3 ${strengthClass}`}>{strengthMessage}</p>
                </div>
                <div className="cer2 bg-primary"></div>
            </Card>
            <Footer />
        </div>
    );
}

export default Checkpass;
