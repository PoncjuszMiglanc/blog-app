import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPost from "./Components/MainPost";
import BlogPost from "./pages/BlogPost";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPost />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/posts/:id" element={<BlogPost />} />
          <Route path="/posts/create" element={<CreatePost />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
