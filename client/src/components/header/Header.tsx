import "./header.scss";
import headerBg from "../../assets/header_bg.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <span className="header__title--secondary">React & Node</span>
        <span className="header__title--primary">Blog</span>
      </div>
      <img className="header__image" src={headerBg} alt="React & Node Blog" />
    </header>
  );
};

export default Header;
