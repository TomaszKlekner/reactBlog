import { useEffect, useState } from "react";
import axios from "../../axios";

import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { IPost } from "../../shared/post.model";
import "./home.scss";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/posts${search}`);
      if (data) {
        setPosts(data);
      }
    };

    fetchData();
  }, [search]);

  return (
    <>
      <Hero />
      <main className="home container">
        {posts.length ? (
          <Posts posts={posts} />
        ) : (
          <div className="no-posts">
            <h2>No Posts to display!</h2>
          </div>
        )}
        <Sidebar />
      </main>
    </>
  );
};

export default Home;
