import React from "react";
import "../Navigation/Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="nav_main">
        <div className="nav_logo">
          <img
            className="cric_logo"
            src={window.location.origin + "/cricket Logo1.png"}
            alt="Cricket"
          />
          <h1>Cricket LiveScore</h1>
        </div>
        <div className="nav_list">
          <ul className="nav_pages">
            <li>Series</li>
            <li>Teams</li>
            <li>News</li>
            <li>Features</li>
            <li>Video</li>
            <li>Stats</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
