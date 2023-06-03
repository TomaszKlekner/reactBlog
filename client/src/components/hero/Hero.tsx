import "./hero.scss";
import heroBg from "../../assets/hero_bg.jpg";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero__title">
        <span className="hero__title--secondary">React & Node</span>
        <span className="hero__title--primary">Blog</span>
      </div>
      <img className="hero__image" src={heroBg} alt="React & Node Blog" />
    </div>
  );
};

export default Hero;
