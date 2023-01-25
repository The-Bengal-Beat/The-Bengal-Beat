import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";
import Post from "../components/Post";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<IApiOutput>({ data: [], error: "" })

  useEffect(() => {
    getDataFromApi()
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <>
      <div className="flex flex-col w-full h-full">
        {posts.data.map(post => <Post data={post} key={post.id} />)}
      </div>
      <p>Errors: {posts.error}</p>
    </>
  );
};

export default Home;
