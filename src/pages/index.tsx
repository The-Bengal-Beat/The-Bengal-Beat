import type { NextPage } from "next";
import PostTable from "../components/PostTable/PostTable";

const Home: NextPage = () => {
  return (
    <div className="h-full w-full">
      <PostTable />
    </div>
  )
};

export default Home;
