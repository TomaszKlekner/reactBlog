import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import AddPost from "./pages/addPost/AddPost";
import SinglePage from "./pages/singlePage/SinglePage";
import PostList from "./pages/PostList/PostList";

function App() {
  const user: boolean = false;

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        {!user && <Route path="/login" element={<Login />} />}
        {!user && <Route path="/register" element={<Register />} />}
        {user && <Route path="/settings" element={<Settings />} />}
        {user && <Route path="/new-post" element={<AddPost />} />}
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
