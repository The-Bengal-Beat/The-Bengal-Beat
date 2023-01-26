import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getDataFromApi, IApiOutput } from "../utils/getDataFromApi";
import PostRow from "../components/PostRow/PostRow";

const Home: NextPage = () => {
  const [posts, setPosts] = useState<IApiOutput>({ data: [], error: "" })

  useEffect(() => {
    getDataFromApi()
      .then(data => setPosts(data))
      .catch(err => console.log(err))
  }, [])
  
  return (
      <div className="grid grid-cols-1 gap-y-px flex-wrap w-full h-full p-4">
        {posts.headers && <p>{JSON.stringify(posts.headers)}</p>}
        {posts.data.map(post => <PostRow data={post} key={post.id} />)}
      </div>
  );
};

export default Home;
