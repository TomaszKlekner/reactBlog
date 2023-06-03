import { Link } from "react-router-dom";

import "./header.scss";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa";

interface Props {
  user: boolean;
}

const Header = ({ user }: Props) => {
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

          {user && (
            <li className="header__list-item">
              <Link className="header__list-link" to="/new-post">
                Add Post
              </Link>
            </li>
          )}

          <li className="header__list-item">
            <Link className="header__list-link" to="/contact">
              Contact
            </Link>
          </li>

          <li className="header__list-item">
            <Link className="header__list-link" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="header--rigth">
        {user ? (
          <Link className="user__link" to="/settings">
            <FaRegUserCircle />
          </Link>
        ) : (
          <ul className="header__list">
            <li className="header__list-item">
              <Link className="user__link" to="/register">
                Register
              </Link>
            </li>
            <li className="header__list-item">
              <Link className="user__link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        )}

        <div className="search">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
