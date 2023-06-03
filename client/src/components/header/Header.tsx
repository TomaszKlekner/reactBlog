import { Link } from "react-router-dom";

import "./header.scss";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header container">
      <div className="header--left">
        <div className="header__icon">
          <FaFacebookSquare />
        </div>
        <div className="header__icon">
          <FaTwitterSquare />
        </div>
        <div className="header__icon">
          <FaInstagramSquare />
        </div>
      </div>

      <div className="header--center">
        <ul className="header__list">
          <li className="header__list-item">
            <Link className="header__list-link" to="/">
              Home
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/about">
              About
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/new-post">
              Add Post
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/register">
              Register
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/login">
              LogIn
            </Link>
          </li>
        </ul>
      </div>

      <div className="header--rigth">
        <Link className="user__link" to="/settings">
          <FaRegUserCircle />
        </Link>
        <div className="search">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
