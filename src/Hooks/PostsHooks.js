import { useContext } from "react";
import { AllPostsContext } from "../Components/AllPostsContext";

export const useAllPosts = () => {
  return useContext(AllPostsContext);
};
