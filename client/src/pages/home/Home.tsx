import Hero from "../../components/hero/Hero";
import Post from "../../components/post/Post";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePage from "../singlePage/SinglePage";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="home container">
        <SinglePage />
      </main>
    </>
  );
};

export default Home;
