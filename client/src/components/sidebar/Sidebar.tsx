import { useEffect, useState } from "react";
import axios from "../../axios";
import "./sidebar.scss";
import sidebarAboutMe from "../../assets/sidebar_about_me.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { ICategory } from "../../shared/category.model";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchCategories = async () => {
      const { data } = await axios.get("categories", {
        signal: signal,
      });
      setCategories(data);
    };

    fetchCategories();

    return () => {
      controller.abort();
    };
  }, []);

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
          {categories.map((category) => (
            <li key={category.id} className="sidebar__list-item">
              <Link to={`posts?category=${category.name.toLocaleLowerCase()}`}>
                {category.name}
              </Link>
            </li>
          ))}
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
