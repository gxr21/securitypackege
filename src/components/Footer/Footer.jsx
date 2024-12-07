import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="px-4">
      <div className="footer_cont row">
        <div className="col px-0">
          <div className="row h-100">
            <p className="m-0 footer-title">Social Media</p>
            <div className="col pb-4 h-100 d-flex justify-content-center align-items-end py-2 gap-2">
              <div className="face-img"></div>
              <div className="insta-img"></div>
              <div className="tele-img"></div>
            </div>
            <div className="col-1 line px-0"></div>
          </div>
        </div>
        <div className="col px-0 d-flex justify-content-center">
          <p className="m-0 footer-title-2">Our WebSite</p>
          <p className="mt-5 footer-talk">
            Our website is protected, secure logins, and constant monitoring to keep your data safe from threats.
          </p>
        </div>
        <div className="col px-0">
          <p className="m-0 footer-title-3">Navigation Links</p>
          <div className="row h-100">
            <div className="col-1 line px-0"></div>
            <div className="col">
              <nav className="footer-nav">
                <a href="/">Home</a>
                <a href="#cards">content</a>
                <a href="#SECURITY">explore</a>
                <a href="#trends">trends</a>
                <a href="/Policy">Policy</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_cont2" style={{ textAlign: "center" }}>
        <a  href='/Policy' className="Policy">Privacy Policy and Security Policy in our website</a>
      </div>
    </footer>
  );
};

export default Footer;
