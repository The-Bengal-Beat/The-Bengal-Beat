import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";
import PostCard from "../components/PostCard/PostCard";
import PostRow from "../components/PostRow/PostRow";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<IApiOutput>({ data: [], error: "" })

  useEffect(() => {
    getDataFromApi()
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  }, [])
  
  return (
      <div className="flex flex-row flex-wrap w-full h-full">
        <PostRow />
        {/* {posts.data.map(post => <PostCard data={post} key={post.id} />)} */}
      </div>
  );
};

export default Home;
