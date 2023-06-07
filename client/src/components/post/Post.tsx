import { Link } from "react-router-dom";
import moment from "moment";
import "./post.scss";
import postImage from "../../assets/sidebar_about_me.jpg";
import { IPost } from "../../shared/post.model";

interface Props {
  post: IPost;
}

const Post = ({ post }: Props) => {
  const { title, description, categories, createdAt } = post;
  const createdAtAgo = moment
    .utc(createdAt)
    .local()
    .startOf("seconds")
    .fromNow();

  console.log(post);
  return (
    <div className="post">
      <img className="post__image" src={postImage} alt={title} />
      <div className="post__info">
        <div className="post__categories">
          {categories.map((category) => (
            <span key={category} className="post__category">
              {category}
            </span>
          ))}
        </div>
        <h3 className="post__title">
          <Link className="post__link" to={`posts/${title}`}>
            {title}
          </Link>
        </h3>
        <hr />
        <span className="post__date">{createdAtAgo}</span>
      </div>
      <p className="post_description">{description}</p>
    </div>
  );
};

export default Post;
