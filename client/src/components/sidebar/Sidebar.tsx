import "./sidebar.scss";
import sidebarAboutMe from "../../assets/sidebar_about_me.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img src={sidebarAboutMe} alt="About Me" className="sidebarImage" />
        <p className="sidebarParagraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          odio quaerat cupiditate quo consectetur minima beatae nostrum vel
          quibusdam illo?
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocials">
          <div className="sidebarIcon">
            <FaFacebookSquare />
          </div>
          <div className="sidebarIcon">
            <FaTwitterSquare />
          </div>
          <div className="sidebarIcon">
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
