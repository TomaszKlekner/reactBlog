import "./posts.scss";
import Post from "../post/Post";

const Posts = () => {
  return (
    <div className="posts">
      <div className="posts__grid grid__container">
        <Post post={{ id: 1 }} />
        <Post post={{ id: 2 }} />
        <Post post={{ id: 3 }} />
        <Post post={{ id: 4 }} />
        <Post post={{ id: 5 }} />
        <Post post={{ id: 6 }} />
        <Post post={{ id: 7 }} />
        <Post post={{ id: 8 }} />
        <Post post={{ id: 9 }} />
      </div>
    </div>
  );
};

export default Posts;
