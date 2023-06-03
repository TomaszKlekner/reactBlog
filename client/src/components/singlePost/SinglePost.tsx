import { useParams } from "react-router-dom";

import "./single-post.scss";
import postImage from "../../assets/sidebar_about_me.jpg";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const SinglePost = () => {
  const { id } = useParams();

  return (
    <div className="single-post" id={`post-id-${id}`}>
      <img
        className="single-post__image"
        src={postImage}
        alt="Single Post title"
      />

      <h1 className="single-post__title">
        <span>Single Post Title</span>
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
        <span className="single-post__author">
          Author: <strong>Author Name</strong>
        </span>
        <span className="single-post__date">1 hour ago</span>
      </div>

      <p className="single-post__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        nisi ex veritatis explicabo fuga alias atque vel iusto maxime temporibus
        non modi laborum blanditiis suscipit consequuntur voluptas eaque
        molestiae sequi, repellat in ad quam molestias. Laudantium voluptas ut
        molestias ipsam quisquam dignissimos, animi doloribus, dicta rerum aut
        excepturi, deserunt voluptatum expedita nam ratione fugiat explicabo
        suscipit sint labore quaerat harum quidem nihil est consequuntur.
        Eveniet possimus magnam ex hic laborum illum atque, et ipsam. Labore
        nulla velit nostrum tenetur, laudantium in debitis porro sequi rem, id
        quo voluptatibus minima similique magnam quis voluptas accusantium
        excepturi tempore enim aspernatur doloribus minus.
      </p>
    </div>
  );
};

export default SinglePost;
