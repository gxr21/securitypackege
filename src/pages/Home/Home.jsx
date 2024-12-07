import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from 'react-router-dom';

function Home() {
    const [visibleDiv, setVisibleDiv] = useState("");
    const showDiv = (divId) => {
        setVisibleDiv(divId);
    };
    const navigate = useNavigate(); // Initialize the navigation hook

    const page1 = () => {
        navigate('/Generatepass'); // Replace '/target-page' with your desired route
    };
    const page2 = () => {
        navigate('/SavePass'); // Replace '/target-page' with your desired route
    };
    const page3 = () => {
        navigate('/Checkpass'); // Replace '/target-page' with your desired route
    };
    const page4 = () => {
        navigate('/Roadmap'); // Replace '/target-page' with your desired route
    };
    const page5 = () => {
        navigate('/AboutSec'); // Replace '/target-page' with your desired route
    };
    return (
        <div style={{height:"100vh"}}>
            <Header></Header>
            <section className="px-5 d-flex mb-5">
                <div className="row w-50" style={{ flexDirection: "column" }}>
                    <div className="col">
                        <h2 className="Welcomemessage my-5">Welcome to SecurityPackage</h2>
                    </div>
                    <div className="col">
                        <p className="Shieldmessage my-3">
                            your trusted partner in safeguarding what matters most.
                            <br /> Explore our solutions for enhanced protection and peace of mind.
                        </p>
                    </div>
                </div>
                <div className="row w-50">
                    <div className="col w-100 sec_img"></div>
                </div>
            </section>

            {/* CARDS 2nd SECTION */}
            <section className="px-5 d-flex justify-content-center" id="cards">
                <div className="continer">
                    <button  onClick={page1}  className="b1">
                        <div className="row w-100" style={{ height: "25%" }}>
                            <div className="col-3 card-image"></div>
                            <div className="col-9 card-tit">Generate password</div>
                        </div>
                        <div className="row w-100 card-talk" style={{ height: "75%" }}>
                            It will provides all the tools you need to generate a strong and reliable password.
                        </div>
                    </button>
                    <button  onClick={page2} className="b1">
                        <div className="row w-100" style={{ height: "25%" }}>
                            <div className="col-3 card-image2"></div>
                            <div className="col-9 card-tit">Save password</div>
                        </div>
                        <div className="row w-100 card-talk" style={{ height: "75%" }}>
                            To save your password, It lets you securely store your password for future use.
                        </div>
                    </button>
                    <button  onClick={page3} className="b1">
                        <div className="row w-100" style={{ height: "25%" }}>
                            <div className="col-3 card-image3"></div>
                            <div className="col-9 card-tit">password strength</div>
                        </div>
                        <div className="row w-100 card-talk" style={{ height: "75%" }}>
                            "To check your password strength, It helps you ensure your password is strong and secure."
                        </div>
                    </button>
                    <button  onClick={page4} className="b1">
                        <div className="row w-100" style={{ height: "25%" }}>
                            <div className="col-3 card-image4"></div>
                            <div className="col-9 card-tit">Security RoadMap</div>
                        </div>
                        <div className="row w-100 card-talk" style={{ height: "75%" }}>
                            To review your security plan, It guides you in enhancing your overall security.
                        </div>
                    </button>
                    <button  onClick={page5}  className="b1">
                        <div className="row w-100" style={{ height: "25%" }}>
                            <div className="col-3 card-image5"></div>
                            <div className="col-9 card-tit">About security</div>
                        </div>
                        <div className="row w-100 card-talk" style={{ height: "75%" }}>
                            "To learn more about your security, It provides insights and tools to help protect your information."
                        </div>
                    </button>
                </div>
            </section>

            {/* 3rd SECTION */}
            <section className="about_sec px-5" id="SECURITY">
                <p className="about_title">WHAT IS SECURITY ?</p>
                <p className="about_content">
                    "Security is the practice of protecting information, systems, and assets from threats or unauthorized access.
                    It ensures confidentiality, integrity, and availability of data while safeguarding against potential risks.
                    Strong security measures help maintain trust and prevent breaches in both physical and digital
                    environments."
                </p>
                <p className="about_trend" id="trends">Some of the top trending topics in cybersecurity for 2024</p>
                <div className="about_select">
                    <button
                        onClick={() => showDiv("div1")}
                        className="about_button"
                        style={{ marginRight: "15px" }}
                    >
                        Zero Trust Security
                    </button>
                    <button
                        onClick={() => showDiv("div2")}
                        className="about_button"
                        style={{ marginRight: "15px" }}
                    >
                        AI and Machine Learning
                    </button>
                    <button
                        onClick={() => showDiv("div3")}
                        className="about_button"
                        style={{ marginRight: "15px" }}
                    >
                        IoT Security
                    </button>
                    <button onClick={() => showDiv("div4")} className="about_button">
                        Cybersecurity Skills Gap
                    </button>

                    <div id="div1" className={`content-div ${visibleDiv === "div1" ? "" : "hidden"}`}>
                        This security model is gaining significant attention. Zero Trust operates on the principle of "never trust,
                        always verify," focusing on rigorous identity verification and strict access controls, especially as
                        organizations adopt more cloud and hybrid environments.
                    </div>
                    <div id="div2" className={`content-div ${visibleDiv === "div2" ? "" : "hidden"}`}>
                        AI is being used for advanced threat detection and real-time response, while also posing new challenges,
                        such as AI-driven malware and deep fakes. The role of AI in cybersecurity is expected to grow, with the
                        technology becoming central to tackling evolving threats.
                    </div>
                    <div id="div3" className={`content-div ${visibleDiv === "div3" ? "" : "hidden"}`}>
                        As IoT devices continue to grow, the associated cybersecurity risks are escalating. These devices, often
                        lacking robust security measures, provide attackers with multiple points of entry into networks. The
                        integration of 5G technology is also amplifying these risks.
                    </div>
                    <div id="div4" className={`content-div ${visibleDiv === "div4" ? "" : "hidden"}`}>
                        The shortage of skilled cybersecurity professionals is a growing challenge. To address this, there is an
                        emphasis on specialized education and training programs to equip workers with the necessary skills to combat
                        increasingly sophisticated cyber threats.
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <Footer></Footer>
        </div>
    );
}

export default Home;
