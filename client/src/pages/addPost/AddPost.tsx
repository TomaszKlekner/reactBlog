import { FaPlus } from "react-icons/fa";
import heroBg from "../../assets/hero_bg.jpg";
import "./add-post.scss";
import CUser from "../../shared/user.model";

interface Props {
  user: CUser | null;
}

const Write = ({ user }: Props) => {
  return (
    <div className="add-post container">
      <img src={heroBg} alt="" className="add-post__image" />

      <form className="form add-post-form">
        <div className="form__group add-post-form__group">
          <label htmlFor="file__input" className="add-post-form__label">
            <FaPlus />
          </label>
          <input
            type="file"
            id="file__input"
            className="file__input file__input--file add-post-form__input--file"
          />
          <input
            type="text"
            className="file__input file__input--text add-post-form__input--text"
            placeholder="Title"
            autoFocus={true}
            required
          />
        </div>

        <div className="form__group add-post-form__group">
          <textarea
            className="add-post-form__input--textarea"
            cols={30}
            rows={10}
            placeholder="Tell your story"
            required
          ></textarea>
        </div>

        <div className="form__group add-post-form__group">
          <button className="add-post-form__button" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
