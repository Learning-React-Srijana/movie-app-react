import { React } from "react";
import logo from "../images/logo.svg";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-part">
        <div className="nav-left-content">
          <a className="logo" href="/">
            <img src={logo} alt="TMDB" />
          </a>
          <ul>
            <li>
              <a href="/">Movies</a>
            </li>
            <li>
              <a href="/">TVShows</a>
            </li>
            <li>
              <a href="/">People</a>
            </li>
            <li>
              <a href="/">More</a>
            </li>
          </ul>
        </div>
        <div className="nav-right-content">
          <ul>
            <li>
              <a href="/" className="language-translate">
                EN
              </a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">Join TMDB </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
