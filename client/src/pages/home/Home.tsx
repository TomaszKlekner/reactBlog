import Header from "../../components/header/Header";
import Post from "../../components/post/Post";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home container">
        <Posts />
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
