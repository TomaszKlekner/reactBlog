import "./single-page.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

const SinglePage = () => {
  return (
    <div className="single-page container">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePage;
