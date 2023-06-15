import "./single-page.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import CUser from "../../shared/user.model";

interface Props {
  user: CUser | null;
}

const SinglePage = ({ user }: Props) => {
  return (
    <div className="single-page container">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePage;
