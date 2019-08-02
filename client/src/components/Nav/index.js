import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <div id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item" id="home">
                  <a className="nav-link" href="/"><button type="button" className="btn">Search Books</button></a>
              </li>
              <li className="nav-item" id="report">
                  <a className="nav-link" href="/books"><button type="button" className="btn">Saved Books</button></a>
              </li>
          </ul>
      </div>
    </nav>
  );
}

export default Nav;
