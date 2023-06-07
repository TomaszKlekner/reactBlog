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
      <div className="sidebar__item">
        <img src={sidebarAboutMe} alt="About Me" className="sidebar__image" />
        <span className="sidebar__title">About Me</span>
        <p className="sidebar__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          odio quaerat cupiditate quo consectetur minima beatae nostrum vel
          quibusdam illo?
        </p>
      </div>

      <div className="sidebar__item">
        <span className="sidebar__title">Categories</span>
        <ul className="sidebar__list">
          <li className="sidebar__list-item">Life</li>
          <li className="sidebar__list-item">Music</li>
          <li className="sidebar__list-item">Style</li>
          <li className="sidebar__list-item">Sport</li>
          <li className="sidebar__list-item">Tech</li>
          <li className="sidebar__list-item">Cinema</li>
        </ul>
      </div>

      <div className="sidebar__item">
        <span className="sidebar__title">Follow Us</span>
        <div className="sidebar__socials">
          <div className="sidebar__icon">
            <FaFacebookSquare />
          </div>
          <div className="sidebar__icon">
            <FaTwitterSquare />
          </div>
          <div className="sidebar__icon">
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
