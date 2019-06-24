import React from "react";
import { Link } from "react-router-dom";
const TakeControl = () => {
  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <Link href="#">Risk Reports</Link>
              </li>
              <li class="breadcrumb-item" aria-current="page">
                Technology
              </li>
            </ol>
          </nav>
          <h1 class="display-4">Taking control</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
    </>
  );
};

export default TakeControl;
