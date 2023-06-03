import "./post.scss";
import postImage from "../../assets/sidebar_about_me.jpg";

const Post = () => {
  return (
    <div className="post">
      <img className="post__image" src={postImage} alt="Post Title" />
      <div className="post__info">
        <div className="post__categories">
          <span className="post__category">Music</span>
          <span className="post__category">Life</span>
        </div>
        <h3 className="post__title">Lorem ipsum dolor sit amet.</h3>
        <hr />
        <span className="post__date">1 hour ago</span>
      </div>
      <p className="post_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        corrupti commodi debitis laudantium iusto accusamus unde voluptates
        nobis. Minima, accusamus?
      </p>
    </div>
  );
};

export default Post;
