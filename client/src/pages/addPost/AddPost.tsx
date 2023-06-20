import { FaPlus } from "react-icons/fa";
import "./add-post.scss";
import { ChangeEvent, useContext, useState } from "react";
import axios from "../../axios";
import { IPost } from "../../shared/post.model";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const {
    state: { user },
  } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null | undefined>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user) {
      const newPost: IPost = {
        author: user?.username,
        title,
        description,
        isPublished: false,
      };

      if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.photo = filename;

        try {
          await axios.post<IPost>("/upload", data);
        } catch (error) {
          console.log(error);
        }
      }

      try {
        const { data } = await axios.post<IPost>("/posts", newPost);
        navigate(`/posts/${data._id}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="add-post container">
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt=""
          className="add-post__image"
        />
      )}

      <form className="form add-post-form" onSubmit={handleSubmit}>
        <div className="form__group add-post-form__group">
          <label
            htmlFor="file__input"
            className="add-post-form__label"
            title="Add Post Image"
          >
            <FaPlus />
          </label>
          <input
            type="file"
            id="file__input"
            className="file__input file__input--file add-post-form__input--file"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFile(e.target.files?.[0])
            }
          />
          <input
            type="text"
            className="file__input file__input--text add-post-form__input--text"
            placeholder="Title"
            autoFocus={true}
            required
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>

        <div className="form__group add-post-form__group">
          <textarea
            className="add-post-form__input--textarea"
            cols={30}
            rows={10}
            placeholder="Tell your story"
            required
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setDescription(e.target.value)
            }
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
