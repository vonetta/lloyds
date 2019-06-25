import React from "react";

const TopNav = () => {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
      <a
        className="navbar-brand black"
        href="https://www.lloyds.com/"
        rel="noopener noreferrer"
      >
        LLOYDS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/about-lloyds"
              target="_blank"
              rel="noopener noreferrer"
            >
              About <span className="sr-only">(current)</span>&#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/about-lloyds/value_proposition_broker"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brokers &#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/about-lloyds/value_proposition_coverholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coverholders &#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/about-lloyds/value_proposition_insurer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Insurer &#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/policyholder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Policyholders &#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/careers"
              target="_blank"
              rel="noopener noreferrer"
            >
              Careers &#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/investor-relations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Investor relations &#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://www.lloyds.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact &#124;{" "}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="top"
              href="https://secure.lloyds.com/login?ReturnUrl=%2f%3fwa%3dwsignin1.0%26wtrealm%3dhttps%253a%252f%252fwww.lloyds.com%252f%26wctx%3drm%253d0%2526id%253d875d63f8-d4cd-4d3e-87d9-79847fcc6add%2526ru%253dhttps%25253a%25252f%25252fwww.lloyds.com%25252fnews-and-risk-insight%25252frisk-reports%25252flibrary%25252ftechnology%25252ftaking-control%26wct%3d2019-06-25T03%253a09%253a13Z&wa=wsignin1.0&wtrealm=https%3a%2f%2fwww.lloyds.com%2f&wctx=rm%3d0%26id%3d875d63f8-d4cd-4d3e-87d9-79847fcc6add%26ru%3dhttps%253a%252f%252fwww.lloyds.com%252fnews-and-risk-insight%252frisk-reports%252flibrary%252ftechnology%252ftaking-control&wct=2019-06-25T03%3a09%3a13Z"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login/register
            </a>
          </li>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <i className="fas fa-search" id="filtersubmit" />
          </form>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
