import { useEffect, useState } from "react";
import axios from "../../axios";

import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { IPost } from "../../shared/post.model";
import "./home.scss";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("posts");
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <main className="home container">
        <Posts posts={posts} />
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
