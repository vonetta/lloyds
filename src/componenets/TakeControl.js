import React from "react";
import { Link } from "react-router-dom";
const TakeControl = () => {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="https://www.lloyds.com/news-and-risk-insight/risk-reports">
                  Risk Reports
                </a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <a href="https://www.lloyds.com/news-and-risk-insight/risk-reports/library/technology">
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
          <i className="fas fa-share-alt" /> Share
        </div>
      </div>
    </>
  );
};

export default TakeControl;
