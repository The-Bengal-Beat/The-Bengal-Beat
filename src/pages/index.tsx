import type { NextPage } from "next";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <Posts />
    </div>
  );
};

export default Home;
