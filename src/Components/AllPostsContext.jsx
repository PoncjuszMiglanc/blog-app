import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AllPostsContext = createContext();

const AllPostsProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);

  const getPostList = () => {
    fetch("http://localhost:8080/posts")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPostList(res.posty.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <AllPostsContext.Provider value={postList}>
      {children}
    </AllPostsContext.Provider>
  );
};

AllPostsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AllPostsProvider;
