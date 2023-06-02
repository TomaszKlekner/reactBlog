import "./header.scss";
import headerBg from "../../assets/header_bg.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="headerTitle">
        <span className="headerTitleSecondary">React & Node</span>
        <span className="headerTitlePrimary">Blog</span>
      </div>
      <img className="headerImage" src={headerBg} alt="React & Node Blog" />
    </header>
  );
};

export default Header;
