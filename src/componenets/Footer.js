import React from "react";
import Twitter from "../imgs/twitter.png";
import Facebook from "../imgs/facebook.jpg";
import LinkedIn from "../imgs/linkedIn.png";
import Youtube from "../imgs/youtube.png";
const Footer = () => {
  return (
    <footer className="container-fluid">
      <section className="container footer-nav">
        <a
          href="https://www.lloyds.com/common/privacy-notices"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy
        </a>{" "}
        &#124;{" "}
        <a
          href="https://www.lloyds.com/common/cookies-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookies
        </a>{" "}
        &#124;{" "}
        <a
          href="https://www.lloyds.com/common/terms-and-conditions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms & Conditions
        </a>{" "}
        &#124;{" "}
        <a
          href="https://www.lloyds.com/modernslaverystatement"
          download="https://www.lloyds.com/modernslaverystatement"
          rel="noopener noreferrer"
        >
          Modern Slavery Act
        </a>{" "}
        &#124;{" "}
        <a
          href="https://www.lloyds.com/help-and-glossary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Help
        </a>{" "}
        &#124;{" "}
        <a
          href="https://www.lloyds.com/contact-us"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </section>
      <section className="container footer-social">
        <a
          href="https://twitter.com/LloydsofLondon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twitter} alt="twitter logo" />
        </a>
        <a
          href="https://www.facebook.com/lloyds"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Facebook} alt="facebook logo" />
        </a>
        <a
          href="http://www.linkedin.com/company/lloyd%27s-of-london"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="linkedIn logo" />
        </a>
        <a
          href="https://www.youtube.com/user/Lloydsinsurance"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Youtube} alt="youtube logo" />
        </a>
      </section>
      <section className="container">
        <p>Lloyd's Copyright 2019</p>
        <p>
          Lloyd's is a registered trademark of the Society of Lloyd's. Lloyd's
          is authorised under the Financial Services and Markets Act 2000.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
