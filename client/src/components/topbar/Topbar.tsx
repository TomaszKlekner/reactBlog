import "./topbar.scss";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaRegUserCircle,
  FaSearch,
} from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbar container">
      <div className="top--left">
        <div className="top__icon">
          <FaFacebookSquare />
        </div>
        <div className="top__icon">
          <FaTwitterSquare />
        </div>
        <div className="top__icon">
          <FaInstagramSquare />
        </div>
      </div>

      <div className="top--center">
        <ul className="top__list">
          <li className="top__list-item">Home</li>
          <li className="top__list-item">About</li>
          <li className="top__list-item">Contact</li>
          <li className="top__list-item">Write</li>
          <li className="top__list-item">Logout</li>
        </ul>
      </div>

      <div className="top--rigth">
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

export default Topbar;
