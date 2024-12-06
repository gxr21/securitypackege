import "./Roadmap.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import arrow1 from "../../assets/Arrow1.svg";
import arrow2 from "../../assets/Arrow2.svg";
function Roadmap() {
    return (
        <div style={{height:"100vh"}}>
            <Header/>
            <div class="row content">
        <div class="col-6 ">
            <div class="child-1 main-child-stlye">
                Security Foundations
            </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                Basics of Cybersecurity
            </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                CIA Triad
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Networking Fundamentals
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Threats and Vulnerabilities
                </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
        </div>
        <div class="col-6">
            <div class="child-1 main-child-stlye">
                Operating System Security
            </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                Windows Security Basics
            </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                Linux Security Essentials
                </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                File Permissions and Patch Management
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            
        </div>
        <div class="col-6">
            <div class="child-1 main-child-stlye">
                Cybersecurity Core Concepts
            </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                Malware Types
            </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                Social Engineering and Phishing
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Incident Response Basics
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Penetration Testing Overview 
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
        </div>
        <div class="col-6">
            <div class="child-1 main-child-stlye">
                Cryptography Basics
            </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                Encryption (Symmetric & Asymmetric)
            </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                Hashing and Digital Certificates
                </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                SSL/TLS Protocol
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            
        </div>
        <div class="col-6">
            <div class="child-1 main-child-stlye">
                Web and Application Security
                </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                OWASP Top 10 Overview
                </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                Secure Coding Practices
                </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                API and Web Application Security
                </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            
        </div>
        <div class="col-6">
            <div class="child-1 main-child-stlye">
                Network Security
                </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                Firewalls and VPNs
                </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                Secure Coding Practices
                </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Intrusion Detection/Prevention Systems
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Network Traffic Analysis
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
        </div>
        <div class="col-6">
            <div class="child-1 main-child-stlye">
                Ethical Hacking & Tools
                </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                Reconnaissance and Scanning
                </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                Vulnerability Exploitation Basics
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Essential Tools (Nmap, Metasploit, Burp Suite)
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            
        </div>
        <div class="col-6">
            <div class="child-1 main-child-stlye">
                Advanced Topics
                </div>
            <img src={arrow1} class="arrow arrow-style" alt=""/>
            <img src={arrow1} class="arrow2 arrow-horz-style" alt=""/>
            <div class="child-2 other-child-style">
                Cloud Security Basics
                </div>
            <img src={arrow2} class="arrow3 arrow-style" alt=""/>
            <div class="child-3 other-child-style">
                Zero Trust Architecture
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            <div class="child-3 other-child-style">
                Security Automation & Threat Hunting
            </div>
            <img src={arrow2} class="arrow4 arrow-style" alt=""/>
            <img src={arrow1} class="arrow5 arrow-horz-style" alt=""/>
            
        </div>
    </div>
            <Footer/>
        </div>
    );
}

export default Roadmap;
