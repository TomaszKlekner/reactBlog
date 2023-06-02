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
    <div className="topbar">
      <div className="topLeft">
        <div className="topIcon">
          <FaFacebookSquare />
        </div>
        <div className="topIcon">
          <FaTwitterSquare />
        </div>
        <div className="topIcon">
          <FaInstagramSquare />
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRigth">
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
