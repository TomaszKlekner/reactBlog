import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import AddPost from "./pages/addPost/AddPost";
import SinglePage from "./pages/singlePage/SinglePage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const {
    state: { user },
  } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {!user && <Route path="/login" element={<Login />} />}
        {!user && <Route path="/register" element={<Register />} />}
        {user && <Route path="/settings" element={<Settings />} />}
        {user && <Route path="/new-post" element={<AddPost />} />}
        <Route path="/posts/:id" element={<SinglePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
