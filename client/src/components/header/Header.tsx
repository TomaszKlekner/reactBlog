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
          <li className="header__list-item">Home</li>
          <li className="header__list-item">About</li>
          <li className="header__list-item">Contact</li>
          <li className="header__list-item">Write</li>
          <li className="header__list-item">Logout</li>
        </ul>
      </div>

      <div className="header--rigth">
        <div className="user">
          <FaRegUserCircle />
        </div>
        <div className="search">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;
