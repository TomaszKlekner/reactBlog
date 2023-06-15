import { useEffect, useState } from "react";
import axios from "../../axios";

import Hero from "../../components/hero/Hero";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import { IPost } from "../../shared/post.model";
import "./home.scss";
import { useLocation } from "react-router-dom";
import CUser from "../../shared/user.model";

interface Props {
  user: CUser | null;
}

const Home = ({ user }: Props) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/posts${search}`);
      setPosts(data);
    };

    fetchData();
  }, [search]);

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
