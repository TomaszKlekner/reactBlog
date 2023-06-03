import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <main className="home container">
        <Posts />
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
