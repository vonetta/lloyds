import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <section className="container footer-nav">
        <a href="https://www.lloyds.com/common/privacy-notices" target="_blank">
          Privacy
        </a>{" "}
        &#124;{" "}
        <a href="https://www.lloyds.com/common/cookies-policy" target="_blank">
          Cookies
        </a>{" "}
        &#124;{" "}
        <a
          href="https://www.lloyds.com/common/terms-and-conditions"
          target="_blank"
        >
          Terms & Conditions
        </a>{" "}
        &#124;{" "}
        <a
          href="https://www.lloyds.com/modernslaverystatement"
          download="https://www.lloyds.com/modernslaverystatement"
        >
          Modern Slavery Act
        </a>{" "}
        &#124;{" "}
        <a href="https://www.lloyds.com/help-and-glossary" target="_blank">
          Help
        </a>{" "}
        &#124;{" "}
        <a href="https://www.lloyds.com/contact-us" target="_blank">
          Contact
        </a>
      </section>
      <section className=" container footer-social">
        <a href="https://twitter.com/LloydsofLondon" target="_blank">
          <i class="fab fa-twitter-square" />
        </a>
        <a
          href="http://www.linkedin.com/company/lloyd%27s-of-london"
          target="_blank"
        >
          <i class="fab fa-facebook-square" />
        </a>
        <a href="https://www.facebook.com/lloyds" target="_blank">
          <i class="fab fa-linkedin" />
        </a>
        <a href="https://www.youtube.com/user/Lloydsinsurance" target="_blank">
          <i class="fab fa-youtube-square" />
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
