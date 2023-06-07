import { Link } from "react-router-dom";
import { IPost } from "../../shared/post.model";
import "./post.scss";

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const { _id, title, description, photo, categories, createdAt } = post;

  return (
    <div className="post">
      {photo && <img className="post__image" src={photo} alt={title} />}
      <div className="post__info">
        <div className="post__categories">
          {categories.map((category) => (
            <Link
              key={category}
              className="post__category"
              to={`posts/?category=${category}`}
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
        <span className="post__date">{new Date(createdAt).toDateString()}</span>
      </div>
      <p className="post_description">{description}</p>
    </div>
  );
};

export default Post;
