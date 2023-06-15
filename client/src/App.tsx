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

function App() {
  return (
    <BrowserRouter>
      <UserContext.Consumer>
        {({ state }) => (
          <>
            <Header user={state.user} />
            <Routes>
              <Route path="/" element={<Home user={state.user} />} />
              {!state.user && <Route path="/login" element={<Login />} />}
              {!state.user && <Route path="/register" element={<Register />} />}
              {state.user && (
                <Route
                  path="/settings"
                  element={<Settings user={state.user} />}
                />
              )}
              {state.user && (
                <Route
                  path="/new-post"
                  element={<AddPost user={state.user} />}
                />
              )}
              <Route
                path="/posts/:title"
                element={<SinglePage user={state.user} />}
              />
              <Route path="*" element={<PageNotFound user={state.user} />} />
            </Routes>
          </>
        )}
      </UserContext.Consumer>
    </BrowserRouter>
  );
}

export default App;
