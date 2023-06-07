import { IPost } from "../../shared/post.model";
import Post from "../post/Post";
import "./posts.scss";

interface Props {
  posts: IPost[];
}

const Posts = ({ posts }: Props) => {
  return (
    <div className="posts">
      <div className="posts__grid grid__container">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
