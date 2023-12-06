import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <ul className="footer_list">
          <li>Terms of Use</li>|<li>Privacy Policy</li>|
          <li>Interest-Based Ads</li>|
          <li>Addendum to the Global Privacy Policy</li>|<li>Feedback</li>
        </ul>
        <p className="text">
          © 2023 ESPN Sports Media Ltd. All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
