import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Home Page</h1>
    <p>Redux and React web app.</p>
    <Link to="courses" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;
