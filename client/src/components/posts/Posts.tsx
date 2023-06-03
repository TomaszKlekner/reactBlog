import "./posts.scss";
import postImage from "../../assets/sidebar_about_me.jpg";
import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts">
      <div className="post__grid grid__container">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default Posts;
