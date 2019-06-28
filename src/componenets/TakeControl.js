import React from "react";
import Twitter from "../imgs/twitter.png";
import Facebook from "../imgs/facebook.jpg";
import LinkedIn from "../imgs/linkedIn.png";
import Mail from "../imgs/mail.png";
const TakeControl = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a
                  href="https://www.lloyds.com/news-and-risk-insight/risk-reports"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Risk Reports
                </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a
                  href="https://www.lloyds.com/news-and-risk-insight/risk-reports/library/technology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Technology
                </a>
              </li>
            </ol>
          </nav>
          <h1>Taking control</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>

          <div className="dropdown">
            <i className="fas fa-share-alt"> Share </i>
            <div
              className="dropdown-menu social"
              aria-labelledby="dropdownMenuLink"
            >
              <a
                className="dropdown-item"
                href="https://twitter.com/home?status=https%3A//www.lloyds.com:443/news-and-risk-insight/risk-reports/library/technology/taking-control"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="twitter logo" />
              </a>
              <a
                className="dropdown-item"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A//www.lloyds.com:443/news-and-risk-insight/risk-reports/library/technology/taking-control"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="facebook logo" />
              </a>
              <a
                className="dropdown-item"
                href="https://twitter.com/home?status=https%3A//www.lloyds.com:443/news-and-risk-insight/risk-reports/library/technology/taking-control"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedIn} alt="linkedin logo" />
              </a>
              <a
                className="dropdown-item"
                href="mailto:?subject=Taking-control&amp;body=https%3a%2f%2fwww.lloyds.com%3a443%2fnews-and-risk-insight%2frisk-reports%2flibrary%2ftechnology%2ftaking-control"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Mail} alt="mail icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TakeControl;
