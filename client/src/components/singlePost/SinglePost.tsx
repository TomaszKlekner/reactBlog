import "./single-post.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "../../axios";
import { IPost } from "../../shared/post.model";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState<IPost>({} as IPost);
  const {
    state: { user },
  } = useContext(UserContext);
  const postId = useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editMode, setEditMode] = useState(false);

  const PublicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    const getSinglePost = async () => {
      const { data } = await axios.get(`posts/${postId}`);
      setSinglePost(data);
      setTitle(data.title);
      setDescription(data.description);
    };

    getSinglePost();
  }, [postId]);

  const handleDelete = async () => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this blog post?"
    );

    if (confirmDelete) {
      try {
        await axios.delete("/posts/" + postId, {
          data: { author: user?.username },
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put("/posts/" + postId, {
        author: user?.username,
        title,
        description,
      });
      setEditMode(false);
      navigate(0);
    } catch (error) {
      console.log(error);
    }
  };

  if (singlePost) {
    const {
      author,
      description,
      createdAt,
      isPublished,
      photo,
      title,
      categories,
    } = singlePost;

    const getSingleCategory = (categories: string[]) => {
      if (categories.length) {
        return categories.map((category) => {
          return (
            <span key={category} className="single-post__category">
              {category}
            </span>
          );
        });
      }
    };

    return (
      <div
        className={
          "single-post" +
          (isPublished
            ? " single-post--published"
            : " single-post--unpublished")
        }
        id={`post-id-${postId}`}
      >
        {photo && (
          <img
            crossOrigin="anonymous"
            className="single-post__image"
            src={PublicFolder + photo}
            alt={title}
          />
        )}

        <div className="single-post__heading">
          {editMode ? (
            <input
              className="single-post__title"
              type="text"
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="single-post__title">
              <span>{title}</span>
            </h1>
          )}

          {author === user?.username && !editMode && (
            <div className="single-post__actions">
              <span
                onClick={() => setEditMode(true)}
                className="single-post__action single-post__action--edit"
              >
                <FaEdit />
              </span>
              <span
                onClick={handleDelete}
                className="single-post__action single-post__action--delete"
              >
                <FaTrashAlt />
              </span>
            </div>
          )}
        </div>

        <div className="single-post__info">
          {categories && (
            <div className="single-post__categories">
              {getSingleCategory(categories)}
            </div>
          )}

          {author && (
            <span className="single-post__author">
              Author:{" "}
              <Link to={`../posts/?author=${author.toLocaleLowerCase()}`}>
                <strong>{author}</strong>
              </Link>
            </span>
          )}

          {createdAt && (
            <span className="single-post__date">
              {new Date(createdAt).toDateString()}
            </span>
          )}
        </div>

        {description && editMode ? (
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="single-post__description"
            defaultValue={description}
          />
        ) : (
          <p className="single-post__description">{description}</p>
        )}

        {editMode && (
          <div className="single-post__edit-controls">
            <button
              onClick={() => setEditMode(false)}
              className="btn single-post__cancel"
            >
              Cancle
            </button>
            <button onClick={handleUpdate} className="btn single-post__update">
              Update
            </button>
          </div>
        )}
      </div>
    );
  } else {
    <p>Post was not awailable!!!</p>;
  }
};

export default SinglePost;
