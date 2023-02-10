import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Posts from "../components/Posts";

const Home: NextPage = () => {
  const { data } = useSession();
  
  return (
    <div className="h-full w-full">
      <p>Session: {data?.user?.name}</p>
      <Posts />
    </div>
  );
};

export default Home;
