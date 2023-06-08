import "./single-post.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { IPost } from "../../shared/post.model";

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState<IPost>({} as IPost);
  const postId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const getSinglePost = async () => {
      const { data } = await axios.get(`posts/${postId}`);
      setSinglePost(data);
    };

    getSinglePost();
  }, [postId]);

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
          <img className="single-post__image" src={photo} alt={title} />
        )}

        <h1 className="single-post__title">
          <span>{title}</span>
          <div className="single-post__actions">
            <span className="single-post__action single-post__action--edit">
              <FaEdit />
            </span>
            <span className="single-post__action single-post__action--delete">
              <FaTrashAlt />
            </span>
          </div>
        </h1>

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

        {description && (
          <p className="single-post__description">{description}</p>
        )}
      </div>
    );
  } else {
    <p>Post was not awailable!!!</p>;
  }
};

export default SinglePost;
