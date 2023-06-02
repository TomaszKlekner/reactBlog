import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main className="home">
        <Posts />
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
