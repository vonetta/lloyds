import React from "react";
import { NavLink, Link } from "react-router-dom";
import Twitter from "../imgs/twitter.jpg";
import Facebook from "../imgs/facebook.jpg";
import LinkedIn from "../imgs/linkedIn.png";
import Youtube from "../imgs/youtube.png";

const Footer = () => {
  return (
    <footer className="container-fluid">
      <section className="container footer-nav">
        <NavLink to="#">Privacy</NavLink> &#124;{" "}
        <NavLink to="#">Cookies</NavLink> &#124;{" "}
        <NavLink to="#">Terms & Conditions</NavLink> &#124;{" "}
        <NavLink to="#">Modern Slavery Act</NavLink> &#124;{" "}
        <NavLink to="#">Help</NavLink> &#124; <NavLink to="#">Contact</NavLink>
      </section>
      <section className=" container footer-social">
        <Link to="#">
          <img src={Twitter} alt="Twitter Icon Logo" />
        </Link>
        <Link to="#">
          <img src={Facebook} alt="Facebook Icon Logo" />
        </Link>
        <Link to="#">
          <img src={LinkedIn} alt="LinkedIn Icon Logo" />
        </Link>
        <Link to="#">
          <img src={Youtube} alt="Youtube Icon Logo" />
        </Link>
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
