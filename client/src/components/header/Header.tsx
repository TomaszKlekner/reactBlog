import { Link, useNavigate } from "react-router-dom";

import "./header.scss";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { UserActionType } from "../../context/UserActions";

const Header = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: UserActionType.LOGOUT,
      payload: null,
    });
    navigate("/login");
  };

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

          {user && (
            <li className="header__list-item">
              <a className="header__list-link" onClick={handleLogout}>
                Logout
              </a>
            </li>
          )}
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
