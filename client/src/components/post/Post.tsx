import { Link } from "react-router-dom";
import { IPost } from "../../shared/post.model";
import "./post.scss";

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const { _id, title, description, photo, categories, createdAt, author } =
    post;

  const PublicFolder = "http://localhost:5000/images/";

  return (
    <div className="post">
      {photo && (
        <img className="post__image" src={PublicFolder + photo} alt={title} />
      )}
      <div className="post__info">
        <div className="post__categories">
          {categories?.map((category) => (
            <Link
              key={category}
              className="post__category"
              to={`/?category=${category}`}
            >
              {category}
            </Link>
          ))}
        </div>

        <h3 className="post__title">
          <Link className="post__link" to={`posts/${_id}`}>
            {title}
          </Link>
        </h3>
        <hr />
        <div className="post__data">
          {createdAt && (
            <span className="post__date">
              {new Date(createdAt).toDateString()}
            </span>
          )}
          <Link className="post__author" to={`/?author=${author}`}>
            {author}
          </Link>
        </div>
      </div>
      <p className="post_description">{description}</p>
    </div>
  );
};

export default Post;
